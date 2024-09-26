import ProductRepository from '../Repositories/product.repository.js';
import validateMongodbObjectId from '../utils/validateMongodbObjectId.js';

const productRepo = new ProductRepository();

export default class ProductController {
  // Method to get all existing products
  async getAll(req, res, next) {
    try {
      // Get products
      const products = await productRepo.getAll();

      // Send success response
      res.status(200).json({
        success: true,
        message: 'All existing products has been successfully found!',
        products,
      });
    } catch (err) {
      next(err);
    }
  }

  // Method to add product
  async add(req, res, next) {
    const { name, quantity } = req.body;
    try {
      // Add product
      const addedProduct = await productRepo.add(name, quantity);

      // Send success response
      res.status(200).json({
        success: true,
        message: 'Product has been successfully Added!',
        addedProduct,
      });
    } catch (err) {
      next(err);
    }
  }

  // Method to update product quantity
  async updateQuantity(req, res, next) {
    const { id } = req.params;
    const { number } = req.query;
    try {
      // Ensure Id is valid
      await validateMongodbObjectId(id);

      // Update product quantity
      const updatedProduct = await productRepo.updateQuantity(id, Number(number));

      // Send success response
      res.status(200).json({
        success: true,
        message: 'Product has been successfully Updated!',
        updatedProduct,
      });
    } catch (err) {
      next(err);
    }
  }

  // Method to delete product
  async deleteOne(req, res, next) {
    const { id } = req.params;
    try {
      // Ensure Id is valid
      await validateMongodbObjectId(id);

      // Delete product
      const deletedProduct = await productRepo.deleteOne(id);

      // Send success response
      res.status(200).json({
        success: true,
        message: 'Product has been successfully Deleted!',
        deletedProduct,
      });
    } catch (err) {
      next(err);
    }
  }
}
