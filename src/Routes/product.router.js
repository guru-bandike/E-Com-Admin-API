import express from 'express';
import ProductController from '../Controllers/product.controller.js';
import validateUpdateProdQuantityReq from '../Middlewares/validateUpdateProdQuantityReq.middleware.js';

const productController = new ProductController();

// Create product router
const productRouter = express.Router();

// Route to GET all existing products
productRouter.get('/', productController.getAll);

// Route to ADD new Product
productRouter.post('/create', productController.add);

// Router to UPDATE a specific product
productRouter.put(
  '/:id/update_quantity',
  validateUpdateProdQuantityReq,
  productController.updateQuantity
);

// Route to DELETE a specific product
productRouter.delete('/:id', productController.deleteOne);

export default productRouter;
