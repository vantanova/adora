from .db import db
from .user_packs import User_pack

class Pack_type(db.Model):
  __tablename__ = 'pack_types'

  id = db.Column(db.Integer, primary_key = True)
  dropChances = db.Column(db.Integer, nullable = False)
  title = db.Column(db.String(100), nullable = False)
  description = db.Column(db.String(500), nullable = True)
  photoUrl = db.Column(db.String, nullable = True)
  owners = db.relationship("User", lazy="dynamic", secondary="user_packs",
                        back_populates="packs")

  def to_dict(self):
    return {
      "id": self.id,
      "dropChances": self.dropChances,
      "title": self.title,
      "description": self.description,
      "photoUrl": self.photoUrl
    }
