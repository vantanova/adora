from .db import db
from .user_stickers import User_sticker
from .post_sticker import Post_sticker

class Sticker(db.Model):
    __tablename__ = 'stickers'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    rarity = db.Column(db.String(100), nullable=True)
    photoUrl = db.Column(db.String)
    owners = db.relationship("User", lazy="dynamic", secondary="user_stickers",
                            back_populates="stickers")
    posts = db.relationship("Post", lazy="dynamic", secondary="post_stickers",
                            back_populates="stickers")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "rarity": self.rarity,
            "photoUrl": self.photoUrl,
        }
