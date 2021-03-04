from app.models import db, Sticker
# Adds a demo user, you can add other users here if you want
def seed_stickers():

    demo = Sticker(title='Jupiter', description='This is a cool sticker!',
                rarity='Common', photoUrl="https://adorabucket.s3-us-west-1.amazonaws.com/image-from-rawpixel-id-2034668-png.png")

    demo2 = Sticker(title='Waffle', description='This is a tasty sticker!',
                rarity='Common', photoUrl="https://i.pinimg.com/originals/90/7c/3b/907c3b94ce9049d55e5a23677a3fed7c.png")

    db.session.add(demo)
    db.session.add(demo2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_stickers():
    db.session.execute('TRUNCATE stickers CASCADE;')
    db.session.commit()
