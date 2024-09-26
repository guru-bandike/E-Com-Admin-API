import express from 'express';
import productRouter from './src/Routes/product.router.js';
import welcomeUser from './src/Middlewares/welcomeUser.middleware.js';
import globalErrorHandler from './src/Middlewares/globalErrorHandler.middleware.js';
import handleInvalidRoute from './src/Middlewares/handleInvalidRoute.middleware.js';

// Create express app
const app = express();

app.use(express.json());

// Welcome user on default route
app.get('/', welcomeUser);

// Mount Product Router for handling Products related requests
app.use('/products', productRouter);

// Handle invalid routes
app.use(handleInvalidRoute);

// Handle Errors
app.use(globalErrorHandler);

export default app;
