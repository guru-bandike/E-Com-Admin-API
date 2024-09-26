// Middleware to welcome user
const welcomeUser = (req, res) => {
  res.status(200).json({ message: 'Welcome to E-Com-Admin-API!' });
};

export default welcomeUser;
