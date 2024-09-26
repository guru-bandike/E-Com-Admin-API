import mongoose from 'mongoose';
import RequestError from '../errors/RequestError.js';

/**
 * Validates the provided MongoDB ObjectId.
 * @param {string} id - The ObjectId to be validated.
 * @throws {CustomError} If the ObjectId is invalid.
 */
const validateMongodbObjectId = async (id) => {
  try {
    if (!id || !mongoose.Types.ObjectId.isValid(id) || String(id).length !== 24) {
      throw new RequestError(`Invalid Product ID!`, 400, { id });
    }
  } catch (err) {
    throw err;
  }
};

export default validateMongodbObjectId;
