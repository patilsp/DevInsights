import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
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



const Post = models.Post || model('Post', PostSchema);

export default Post;