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
    actualStickerpacks = [Pack_type.query.get(stickerpack.packTypesId) for stickerpack in stickers]

    return {"stickerpacks": [stickerpack.to_dict() for stickerpack in actualStickerpacks]}


@stickerpacks_routes.route('/<packTypeId>', methods=["DELETE"])
@login_required
def redeem_user_stickerpacks(packTypeId):
    row = User_pack.query.filter_by(userId = current_user.id, packTypesId = packTypeId).first()
    numOfRows = Sticker.query.count()
    randomInt = random.randint(1,numOfRows)
    newSticker = Sticker.query.get(randomInt)

    current_user.stickers.append(newSticker)

    db.session.delete(row)
    db.session.commit()

    return newSticker.to_dict()
