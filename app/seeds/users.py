from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password', bio="Wow I sure love the weather!", photoUrl="https://spiritual.gwangi-theme.com/wp-content/themes/gwangi/assets/images/avatars/user-avatar.png")
    demo1 = User(username='RocketProG', email='anguilar@aol.com',
                password='password', bio="I love spaghetti!", photoUrl="https://chordify.net/pages/wp-content/uploads/2019/08/random-chiasso-1024x683.png")


    db.session.add(demo)
    db.session.add(demo1)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
