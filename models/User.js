const { Schema, model, SchemaTypes } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/
    }
  }
)
module.exports = User;