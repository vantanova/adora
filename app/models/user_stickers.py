from .db import db

user_stickers = db.Table(
    "user_stickers",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("sticker_id", db.Integer, db.ForeignKey("stickers.id"))
)
