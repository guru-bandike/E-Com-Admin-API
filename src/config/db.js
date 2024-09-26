import mongoose from 'mongoose';

// Function to Connect to MongoDB Database
const connectToDB = async () => {
  const dbName = 'E-COM-ADMIN-API';
  try {
    // Construct connection url
    const MONGODB_USER_NAME = process.env.MONGODB_USER_NAME;
    const MONGODB_USER_PASSWORD = process.env.MONGODB_USER_PASSWORD;
    const connectionUrl = `mongodb+srv://${MONGODB_USER_NAME}:${MONGODB_USER_PASSWORD}@cluster0.xvzfzw2.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

    // Connect to DB
    await mongoose.connect(connectionUrl);
    console.log('Successfully connected to MongoDB Database!');
  } catch (err) {
    console.log(err);
  }
};

export { connectToDB };
