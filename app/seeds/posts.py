from flask.signals import message_flashed
from werkzeug.security import generate_password_hash
from app.models import db, Post

# Adds a demo user, you can add other users here if you want
def seed_posts():

    post1 = Post(title="Programmers first words", uploadDate="3/3/2021", likes=2, message="Beep Bop Boop Bop", ownerId=1,photoUrl="http://adorabucket.s3.amazonaws.com/ea610e46e4ec45c5a788751c072cf92a.png")
    post2 = Post(title="I love the trees!", uploadDate="3/3/2021", likes=1,message="The trees are everywhere. Some one help please!!!!", ownerId=2,photoUrl="http://adorabucket.s3.amazonaws.com/6d14f02c58e34d5aad7bf69fac989fc3.png")

    db.session.add(post1)
    db.session.add(post2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the posts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
