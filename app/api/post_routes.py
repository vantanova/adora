from operator import pos
from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import db, Post, User
from werkzeug.utils import secure_filename
from ..forms.post_form import PostForm
from ..helpers import *

post_routes = Blueprint('posts', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages



@post_routes.route('/')
@login_required
def posts():
    posts = Post.query.all()

    return {"posts": [post.to_dict() for post in posts]}

@post_routes.route('/', methods=['POST'])
@login_required
def create_post():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
            data = Post()
            form.populate_obj(data)

            if "user_file" not in request.files:

                return "No user_file key in request.files"

            file = request.files["user_file"]

            photoUrl = upload_file_to_s3(file)

            data.photoUrl = photoUrl

            print("---------------", file)
            print("---------------", photoUrl)

            if file.filename == "":
                return "Please select a file"



            db.session.add(data)
            db.session.commit()
            return data.to_dict()
    print({"errors": validation_errors_to_error_messages(form.errors)})
    return {"errors": validation_errors_to_error_messages(form.errors)}



# @user_routes.route('/<int:id>')
# @login_required
# def user(id):
#     user = User.query.get(id)
#     return user.to_dict()
