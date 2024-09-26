# E-Commerce Admin API

E-Commerce Admin API built using Node.js, Express, MongoDB, and Mongoose. It provides functionalities for managing products including adding, updating, and deleting products.

## Prerequisites

Before you can run the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) (installed and running locally or using MongoDB Atlas)

## Installation

Follow these steps to set up the project on your local system:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/guru-bandike/E-Com-Admin-API.git
   ```

2. **Navigate into the Project Directory:**

   ```bash
   cd e-com-admin-api
   ```

3. **Install Dependencies:**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

## Configuration

Before running the application, you need to set up the environment variables for your database and other configuration options.

1. **Create a `.env` File:**

   Inside the root directory of the project, create a `.env` file:

   ```bash
   touch .env
   ```

2. **Add the Following Environment Variables:**

   Open the `.env` file and add the following details:

   ```env
   PORT=8100
   MONGODB_USER_NAME=your_user_name
   MONGODB_USER_PASSWORD=your_user_password
   ```

## Running the Application

1. **Run the Server:**

   To start the server, run the following command:

   ```bash
   npm start
   ```

   By default, the server will start on `http://localhost:8100`.

2. **Verify the Application:**

   You should see the following message in the console:

   ```
   Successfully connected to MongoDB Database!
   Server is listening on 8100
   ```

## API Endpoints

The available API routes are listed below:

### Products

| Method | Endpoint                                | Description             |
| ------ | --------------------------------------- | ----------------------- |
| GET    | `/products`                             | Get all products        |
| POST   | `/products/create`                      | Add a new product       |
| PUT    | `/products/:id/update_quantity?number=` | Update product quantity |
| DELETE | `/products/:id`                         | Delete a product        |

## License

This project is licensed under the MIT License.
