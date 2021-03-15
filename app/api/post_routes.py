from operator import pos
from sqlalchemy import or_
from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from app.models import db, Post, User, post_likes
from werkzeug.utils import secure_filename
from ..forms.post_form import PostForm
from ..helpers import *
import re
import fnmatch

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
def posts():
    posts = Post.query.all()

    return {post.id:post.to_dict() for post in posts}

@post_routes.route('/search', methods=["POST"])
def search_posts():
    searchTerm = request.data.decode("utf-8")
    print(searchTerm)
    # conds = [Post.title == searchTerm]

    all_posts = Post.query.all()
    all_post_names = [post.title for post in all_posts]
    print(all_post_names)
    filtered = fnmatch.filter(all_post_names, searchTerm+"*")
    print(filtered)



    posts = [Post.query.filter(Post.title.ilike(match)).first() for match in filtered]


    return {post.id:post.to_dict() for post in posts}

@post_routes.route('/<postId>', methods=["DELETE"])
def delete_post(postId):
    postToDelete = Post.query.get(postId)
    # print("--------------------",postToDelete.to_dict())
    Post.query.filter_by(id=postId).delete()
    # db.session.delete(postToDelete)
    db.session.commit()

    return "hi"

@post_routes.route('/add_like/<id>')
@login_required
def add_like_post(id):
    post = Post.query.get(id)

    post.user_likes.append(current_user)

    post.likes += 1
    # db.session.add(post)
    db.session.commit()


    return post.to_dict()

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
            data.likes = 0

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
