import mongoose from 'mongoose';
import RequestError from '../errors/RequestError.js';

// Middleware to handle errors
const globalErrorHandler = (err, req, res, next) => {
  // If the error is a RequestError, it indicates a known error.
  // Send a response with the specific status code, message, and additional data if available.
  if (err instanceof RequestError) {
    // Construct the response object
    const response = { success: false, message: err.message };

    // Append any additional error-specific data to the response
    Object.assign(response, err.dataObj);

    return res.status(err.statusCode).json(response);
  }

  // Handle Mongoose ValidationError
  if (err instanceof mongoose.Error.ValidationError) {
    // Extract the field names that caused validation errors
    const validationErrors = Object.keys(err.errors).map((key) => err.errors[key].message);
    return res.status(400).json({
      success: false,
      message: err._message,
      validationErrors,
    });
  }

  // Print error on console
  console.log(err);

  // Inform user about something went wront with Server
  res
    .status(500)
    .json({ success: false, message: 'Oops! Something went wrong, Please try again later!' });
};

export default globalErrorHandler;
