import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  // schema here
});

export default mongoose.model('Product', productSchema);
