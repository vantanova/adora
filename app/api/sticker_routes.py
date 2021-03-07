from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Sticker, Post, db, User, User_sticker

sticker_routes = Blueprint('stickers', __name__)


@sticker_routes.route('/<userId>')
@login_required
def user_projects(userId):
    user = User.query.get(userId)
    data = user.stickers
    stickers = User_sticker.query.filter_by(userId = current_user.id).all()
    actualSticker = [Sticker.query.get(sticker.stickerId) for sticker in stickers]

    return {"stickers": [sticker.to_dict() for sticker in actualSticker]}

@sticker_routes.route('/<stickerId>/<postId>', methods=["DELETE"])
@login_required
def sticker__to_post(stickerId, postId):
    post = Post.query.get(postId)
    sticker = Sticker.query.get(stickerId)
    user = User.query.get(current_user.id)
    new_owner = User.query.get(post.ownerId)
    print(new_owner.to_dict())

    row = User_sticker.query.filter_by(stickerId = stickerId, userId = current_user.id).first()

    print("-----------------", row.id)
    User_sticker.query.filter_by(id=row.id).delete()
    post.stickers.append(sticker)
    new_owner.stickers.append(sticker)
    # # post.stickers.add()

    # # post


    db.session.commit()
    print("------------------", sticker.to_dict())
    print("------------------", post.to_dict())

    return post.to_dict()
