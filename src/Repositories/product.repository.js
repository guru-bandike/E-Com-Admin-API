import RequestError from '../errors/RequestError.js';
import ProductModel from '../Models/product.model.js';

export default class ProductRepository {
  // Method to get all existing products
  async getAll() {
    return await ProductModel.find({});
  }

  // Method to add product
  async add(name, quantity) {
    return await ProductModel.create({ name, quantity });
  }

  // Method to update product quantity
  async updateQuantity(id, number) {
    const targetProduct = await ProductModel.findById(id);

    // If target product Not found, throw RequestError to send failure response
    if (!targetProduct) throw new RequestError('Product Not Found!', 404, { id });

    const quantityToUpdate = targetProduct.quantity + number;
    return await ProductModel.findByIdAndUpdate(id, { quantity: quantityToUpdate }, { new: true });
  }

  // Method to delete product
  async deleteOne(id) {
    const targetProduct = await ProductModel.findById(id);

    // If target product Not found, throw RequestError to send failure response
    if (!targetProduct) throw new RequestError('Product Not Found!', 404, { id });

    return await ProductModel.findByIdAndDelete(id);
  }
}
