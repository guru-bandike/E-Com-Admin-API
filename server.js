import './env.js';
import app from './app.js';
import { connectToDB } from './src/config/db.js';

// Get PORT number
const port = process.env.PORT || 8100;

// Connect to Database
await connectToDB();

// Start server
app.listen(port, () => {
  console.log('Server is listening on ' + port);
});
