from app.models.user_stickers import User_sticker
from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Sticker, Pack_type, db, User, User_pack
import random

stickerpacks_routes = Blueprint('stickerpacks', __name__)


@stickerpacks_routes.route('/<userId>')
@login_required
def user_stickerpacks(userId):
    stickers = User_pack.query.filter_by(userId = userId).all()
    print("---------------", stickers)
    actualStickerpacks = [Pack_type.query.get(stickerpack.packTypesId) for stickerpack in stickers]

    return {"stickerpacks": [stickerpack.to_dict() for stickerpack in actualStickerpacks]}


@stickerpacks_routes.route('/<packTypeId>', methods=["DELETE"])
@login_required
def redeem_user_stickerpacks(packTypeId):
    row = User_pack.query.filter_by(userId = current_user.id, packTypesId = packTypeId).first()
    pack = Pack_type.query.get(packTypeId)
    numOfRows = Sticker.query.count()
    print(numOfRows)
    randomInt = random.randint(1,numOfRows)

    newSticker = Sticker.query.get(randomInt)

    current_user.stickers.append(newSticker)

    db.session.delete(row)
    db.session.commit()

    # actualStickerpacks = [Pack_type.query.get(stickerpack.packTypesId) for stickerpack in stickers]

    return newSticker.to_dict()

# @sticker_routes.route('/<stickerId>/<postId>', methods=["DELETE"])
# @login_required
# def sticker__to_post(stickerId, postId):
#     post = Post.query.get(postId)
#     sticker = Sticker.query.get(stickerId)
#     user = User.query.get(current_user.id)
#     new_owner = User.query.get(post.ownerId)
#     print(new_owner.to_dict())

#     row = User_sticker.query.filter_by(stickerId = stickerId, userId = current_user.id).first()

#     print("-----------------", row.id)
#     User_sticker.query.filter_by(id=row.id).delete()
#     post.stickers.append(sticker)
#     new_owner.stickers.append(sticker)
#     # # post.stickers.add()

#     # # post


#     db.session.commit()
#     print("------------------", sticker.to_dict())
#     print("------------------", post.to_dict())

#     return post.to_dict()
