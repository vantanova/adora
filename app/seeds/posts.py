from flask.signals import message_flashed
from werkzeug.security import generate_password_hash
from app.models import db, Post

# Adds a demo user, you can add other users here if you want
def seed_posts():

    post1 = Post(title="My first post", uploadDate="3/3/2021", message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ownerId=1,photoUrl="https://assets-global.website-files.com/5e4319072e6fb910d3a508a6/5eb32d03692fe040d79f87db_situation.png")
    post2 = Post(title="My second post", uploadDate="3/3/2021", message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ownerId=1,photoUrl="https://i.ytimg.com/vi/Jx2xtPvmk8Q/maxresdefault.jpg")

    db.session.add(post1)
    db.session.add(post2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the posts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_posts():
    db.session.execute('TRUNCATE posts CASCADE;')
    db.session.commit()
