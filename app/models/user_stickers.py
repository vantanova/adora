from .db import db

class User_sticker(db.Model):

    __tablename__ = "user_stickers"

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column("user_id", db.Integer, db.ForeignKey("users.id"))
    stickerId = db.Column("sticker_id", db.Integer, db.ForeignKey("stickers.id"))


    def to_dict(self):
        return {
        "id": self.id,
        }
