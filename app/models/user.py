from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .user_stickers import User_sticker
from .stickers import Sticker
from .user_packs import User_pack
from .post_likes import post_likes
from app.models import user_stickers

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(100), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  status = db.Column(db.String(100), nullable = True)
  bio = db.Column(db.String(500), nullable = True)
  photoUrl = db.Column(db.String, nullable = True)
  stickers = db.relationship("Sticker", lazy="dynamic", secondary="user_stickers",
                            back_populates="owners")
  packs = db.relationship("Pack_type", lazy="dynamic", secondary="user_packs",
                            back_populates="owners")
  post_likes = db.relationship("Post", lazy="dynamic", secondary=post_likes,
                            back_populates="user_likes")


  def users_stickers(self):
          stickers = User_sticker.query.filter_by(userId = self.id).all()
          actualSticker = [Sticker.query.get(sticker.stickerId) for sticker in stickers]

          return actualSticker

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):

    actual = self.users_stickers()

    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "photoUrl": self.photoUrl,
      "bio": self.bio,
      "status": self.status,
      "stickers": [sticker.to_dict() for sticker in actual]
    }
