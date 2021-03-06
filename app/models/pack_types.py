from .db import db
from .user_packs import user_packs

class Pack_type(db.Models):
  __tablename__ = 'pack_types'

  id = db.Column(db.Integer, primary_key = True)
  dropChances = db.Column(db.String(100), nullable = False, unique = True)
  title = db.Column(db.String(100), nullable = False)
  description = db.Column(db.String(500), nullable = True)
  photoUrl = db.Column(db.String, nullable = True)
  owners = db.relationship("User", lazy="dynamic", secondary=user_packs,
                        back_populates="stickers")

  def to_dict(self):
    return {
      "id": self.id,
    }
