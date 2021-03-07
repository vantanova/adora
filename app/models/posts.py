from .db import db
from .post_sticker import Post_sticker
from .post_likes import post_likes
from .stickers import Sticker
from app.models import post_sticker

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    uploadDate = db.Column(db.Date)
    message = db.Column(db.String(500), nullable=True)
    photoUrl = db.Column(db.String, nullable=False)
    likes = db.Column(db.Integer, nullable=True)
    ownerId = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)
    user = db.relationship("User", cascade="all,delete")
    stickers = db.relationship("Sticker",  lazy="dynamic", secondary="post_stickers", back_populates="posts")
    user_likes = db.relationship("User", lazy="dynamic", secondary=post_likes,
                        back_populates="post_likes")



    def post_stickers(self):
        stickers = Post_sticker.query.filter_by(postId = self.id).all()
        actualSticker = [Sticker.query.get(sticker.stickerId) for sticker in stickers]

        return actualSticker

    def to_dict(self):

        actual = self.post_stickers()

        return {
            "id": self.id,
            "title": self.title,
            "message": self.message,
            "photoUrl": self.photoUrl,
            "ownerId": self.ownerId,
            "owner": self.user.to_dict(),
            "likes": self.likes,
            "stickers": [sticker.to_dict() for sticker in actual]
        }
