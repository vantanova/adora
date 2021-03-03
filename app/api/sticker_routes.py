from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Sticker, db, User, user_stickers

sticker_routes = Blueprint('stickers', __name__)


@sticker_routes.route('/<userId>')
@login_required
def user_projects(userId):
    user = User.query.get(userId)
    data = user.stickers.all()
    return {"stickers": [sticker.to_dict() for sticker in data]}
