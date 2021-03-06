from .db import db

class Post_sticker(db.Model):

    __tablename__ = 'post_stickers'

    id = db.Column(db.Integer, primary_key=True)
    postId = db.Column("post_id", db.Integer, db.ForeignKey("posts.id", ondelete="CASCADE"))
    stickerId = db.Column("sticker_id", db.Integer, db.ForeignKey("stickers.id", ondelete="CASCADE"))

    def to_dict(self):
        return {
            "id": self.id,
        }
