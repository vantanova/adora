from operator import pos
from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Post, User

post_routes = Blueprint('posts', __name__)


@post_routes.route('/')
@login_required
def posts():
    posts = Post.query.all()

    return {"posts": [post.to_dict() for post in posts]}


# @user_routes.route('/<int:id>')
# @login_required
# def user(id):
#     user = User.query.get(id)
#     return user.to_dict()
