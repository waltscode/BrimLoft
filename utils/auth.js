const { User } = require('../models');

const withAuth = async (req, res, next) => {
  // Check if the environment is set to "test"
  if (process.env.NODE_ENV === 'test') {
    // Allow the request without a valid session during testing
    return next();
  }

  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect('/signup-login');
  } else {
    try {
      // Fetch user_id from the session
      const user_id = req.session.user_id;

      if (!user_id) {
        res.redirect('/signup-login'); // Redirect if user not found
      } else {
        req.user_id = user_id; // Attach user_id to the request object
        next();
      }
    } catch (error) {
      console.error('Error in withAuth middleware:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

module.exports = withAuth;










