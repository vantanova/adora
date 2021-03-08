from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from app.models import User, db
from werkzeug.utils import secure_filename
from ..helpers import *

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}


def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@user_routes.route('/update/profile', methods=['POST'])
@login_required
def update_profile():

    if "user_file" not in request.files:

        return "No user_file key in request.files"

    file = request.files["user_file"]

    if file.filename == "":
        return "Please select a file"

    if file and allowed_file(file.filename):
        file.filename = secure_filename(file.filename)
        output = upload_file_to_s3(file)
        current_user.photoUrl = str(output)
        db.session.add(current_user)
        db.session.commit()
        return {"url": str(output)}

    else:
        return redirect("/")

@user_routes.route('/update/bio', methods=['POST'])
@login_required
def update_bio():
    print(request.data.decode("utf-8"))

    current_user.bio = request.data.decode("utf-8").replace('"', '')
    db.session.add(current_user)
    db.session.commit()
    return {"about": current_user.bio}
