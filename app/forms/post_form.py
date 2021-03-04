from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired


class PostForm(FlaskForm):
    title = StringField("taskTitle", validators=[DataRequired()])
    message = TextAreaField("message", validators=[DataRequired()])
    ownerId = IntegerField(validators=[DataRequired()])
    submit = SubmitField("submit")
