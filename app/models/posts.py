from .db import db
from .post_stickers import post_stickers

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    uploadDate = db.Column(db.Date)
    message = db.Column(db.String(500), nullable=True)
    ownerId = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)
    user = db.relationship("User")
    stickers = db.relationship("Sticker",  lazy="dynamic", secondary=post_stickers, back_populates="posts")
