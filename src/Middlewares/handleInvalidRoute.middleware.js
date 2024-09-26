// Middleware to handle invalid routes
const handleInvalidRoute = (req, res) => {
  res.status(404).send('API not found!');
};

export default handleInvalidRoute;
