from .db import db

class User_pack(db.Models):

    __tablename__ = 'user_packs'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column("user_id", db.Integer, db.ForeignKey("users.id")),
    packTypesId = db.Column("sticker_id", db.Integer, db.ForeignKey("packTypes.id"))


    def to_dict(self):
        return {
        "id": self.id,
        }
