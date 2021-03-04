from .db import db
from .post_stickers import post_stickers

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    uploadDate = db.Column(db.Date)
    message = db.Column(db.String(500), nullable=True)
    photoUrl = db.Column(db.String, nullable=False)
    ownerId = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)
    user = db.relationship("User", cascade="all,delete")
    stickers = db.relationship("Sticker",  lazy="dynamic", secondary=post_stickers, back_populates="posts")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "message": self.message,
            "photoUrl": self.photoUrl,
            "ownerId": self.ownerId,
            "owner": self.user.to_dict(),
            "stickers": [sticker.to_dict() for sticker in self.stickers]
        }
