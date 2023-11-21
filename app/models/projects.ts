import { Schema, model, models } from 'mongoose';
const { randomUUID } = require('crypto');

const ProjectSchema = new Schema({
  _id: {
    type: 'UUID',
    default: () => randomUUID()
  },
  user_id: String,
  project_name: {
    type: String,
    required: true,
  },
  project_image: {
    type: String,
    required: true,
  },
});

const Project = models.test || model('test', ProjectSchema);

export default Project;