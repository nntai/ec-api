import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
  // schema here
});

export default mongoose.model('Order', orderSchema);
