import { Schema, model, models } from 'mongoose';
const { randomUUID } = require('crypto');

const UserSchema = new Schema({
  _id: {
    type: 'UUID',
    default: () => randomUUID()
  },
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = models.test || model('test', UserSchema);

export default User;