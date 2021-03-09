from app.models import db, Sticker
# Adds a demo user, you can add other users here if you want
def seed_stickers():

    demo = Sticker(title='Jupiter', description='This is a cool sticker!',
                rarity='Common', photoUrl="https://adorabucket.s3-us-west-1.amazonaws.com/image-from-rawpixel-id-2034668-png.png")

    demo2 = Sticker(title='Waffle', description='This is a tasty sticker!',
                rarity='Common', photoUrl="https://i.pinimg.com/originals/90/7c/3b/907c3b94ce9049d55e5a23677a3fed7c.png")

    demo3 = Sticker(title='Friendly Pizza', description='This pizza is very happy to see you!',
                rarity='Common', photoUrl="https://adorabucket.s3-us-west-1.amazonaws.com/pizza-clipart-transparent-21.png")

    demo4 = Sticker(title='Lightbulb', description='Not as bright as your smile!',
                rarity='Common', photoUrl="https://adorabucket.s3-us-west-1.amazonaws.com/580b585b2edbce24c47b2797.png")

    demo5 = Sticker(title='Viking Ship', description='Nothing quite like some arctic see water you know?',
                rarity='Common', photoUrl="https://adorabucket.s3-us-west-1.amazonaws.com/58fa574afd8d8903672fa6e1.png")



    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_stickers():
    db.session.execute('TRUNCATE stickers RESTART IDENTITY CASCADE;')
    db.session.commit()
