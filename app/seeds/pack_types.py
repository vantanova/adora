from app.models import db, Pack_type

# Adds a demo user, you can add other users here if you want
def seed_packtypes():

    demo = Pack_type(dropChances=1, title='Common Stickerpack',
               description='Redeem for one common sticker!', photoUrl="https://adorabucket.s3-us-west-1.amazonaws.com/Sticker+(1).svg")

    db.session.add(demo)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_packtypes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
