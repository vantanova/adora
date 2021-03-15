from app.models import db, User_pack

# Adds a demo user, you can add other users here if you want
def seed_pack_owners():

    demo = User_pack(userId=1, packTypesId=1)
    demo2 = User_pack(userId=1, packTypesId=1)

    db.session.add(demo)
    db.session.add(demo2)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_pack_owners():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
