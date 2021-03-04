from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Sticker, Post, db, User, user_stickers

sticker_routes = Blueprint('stickers', __name__)


@sticker_routes.route('/<userId>')
@login_required
def user_projects(userId):
    user = User.query.get(userId)
    data = user.stickers.all()

    return {"stickers": [sticker.to_dict() for sticker in data]}

@sticker_routes.route('/<stickerId>/<postId>')
@login_required
def sticker__to_post(stickerId, postId):
    post = Post.query.get(postId)
    print(post.to_dict())

    return post.to_dict()
