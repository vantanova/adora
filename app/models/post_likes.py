from .db import db

post_likes = db.Table(
    "post_likes",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("post_id", db.Integer, db.ForeignKey("posts.id"))
)
