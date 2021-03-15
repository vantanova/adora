from flask.cli import AppGroup
from .users import seed_users, undo_users
from .stickers import seed_stickers, undo_stickers
from .posts import seed_posts, undo_posts
from .pack_types import seed_packtypes, undo_packtypes
from .pack_owners import seed_pack_owners, undo_pack_owners

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_stickers()
    seed_posts()
    seed_packtypes()
    seed_pack_owners()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_posts()
    undo_users()
    undo_stickers()
    undo_packtypes()
    undo_pack_owners()
    # Add other undo functions here
