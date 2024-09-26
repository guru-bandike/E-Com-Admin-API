import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Product name is required!'] },
  quantity: { type: Number, default: 0 },
});

const ProductModel = mongoose.model('Products', productSchema);

export default ProductModel;
