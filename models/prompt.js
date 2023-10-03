import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  imagePath: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
  },
  createdDate: {
    type: Date,
  }
});



const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;