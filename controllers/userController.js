const bcrypt = require('bcrypt');
const User = require('../models/User'); 

// Helper function to create an error with a status code
const createError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

// Controller for signing up a new user
exports.signup = async (req, res) => {
  try {
    // Extract user data from req.body
    const { first_name, last_name, username, email, password } = req.body;

    // Validation could be added here

    // Create user in the database
    const newUser = await User.create({
      first_name,
      last_name,
      username,
      email,
      password
    });

    // Set user session
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      // Redirect to the profile page after successful registration
      res.redirect('/profile/' + newUser.id);
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

// Controller for logging in a user
exports.login = async (req, res) => {
  try {
    // Check if user exists
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      throw createError(400, 'Incorrect email or password, please try again');
    }

    // Check if password is valid
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      throw createError(400, 'Incorrect email or password, please try again');
    }

    // Set user session
    req.session.user_id = userData.id;
    req.session.logged_in = true;

    // Respond with a success message
    res.json({ user: userData, message: 'You are now logged in!' });
  } catch (err) {
    res.status(err.status || 400).json({ message: err.message || err });
  }
};

// Controller for logging out a user
exports.logout = (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
};

// Controller for retrieving a user's profile
exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = await User.findByPk(userId);

    if (!userData) {
      throw createError(404, 'User not found');
    }

    // Render the user profile page with user data
    res.render('profile', { user: userData.get({ plain: true }) });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message || err });
  }
};

// Export other controllers as needed
