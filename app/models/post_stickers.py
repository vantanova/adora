from .db import db

post_stickers = db.Table(
    "post_stickers",
    db.Model.metadata,
    db.Column("post_id", db.Integer, db.ForeignKey("posts.id")),
    db.Column("sticker_id", db.Integer, db.ForeignKey("stickers.id"))
)
