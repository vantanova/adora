from .db import db

class User_pack(db.Model):

    __tablename__ = 'user_packs'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column("user_id", db.Integer, db.ForeignKey("users.id"), nullable = False)
    packTypesId = db.Column("pack_type_id", db.Integer, db.ForeignKey("pack_types.id"), nullable = False)


    def to_dict(self):
        return {
        "id": self.id,
        }
