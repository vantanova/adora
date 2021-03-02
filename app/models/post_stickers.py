from .db import db

post_stickers = db.Table(
    "post_stickers",
    db.Model.metadata,
    db.Column("post_id", db.Integer, db.ForeignKey("posts.id"), primary_key = True
    ),
    db.Column("sticker_id", db.Integer, db.ForeignKey("stickers.id"), primary_key = True
    )
)
