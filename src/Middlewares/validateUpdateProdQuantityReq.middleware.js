import RequestError from '../errors/RequestError.js';

// Middleware to Validate Update Product Request
const validateUpdateProdQuantityReq = (req, res, next) => {
  const { id } = req.params;
  const { number } = req.query;
  try {
    // If product ID is not provided, throw Request error to send failure response
    if (!id) throw new RequestError('ID is Required!', 400);

    // If Number is Not provided, throw Request error to send failure response
    if (!number) throw new RequestError('Update product quantity number is required!', 400);

    // If Number is Not valid, throw Request error to send failure response
    if (isNaN(Number(number)))
      throw new RequestError('Invalid product Update quantity number', 400, { number });

    // If Request is valid, Proceed to the next middleware
    next();
  } catch (err) {
    next(err);
  }
};

export default validateUpdateProdQuantityReq;
