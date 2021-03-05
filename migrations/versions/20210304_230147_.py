"""empty message

Revision ID: cbe27c53ec0b
Revises: a27d7dd97792
Create Date: 2021-03-04 23:01:47.484634

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cbe27c53ec0b'
down_revision = 'a27d7dd97792'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('posts', sa.Column('likes', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('posts', 'likes')
    # ### end Alembic commands ###
