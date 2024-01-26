const router = require('express').Router();
const { User } = require('../../models');

// Route for creating a new user (Registration)
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Redirect to the profile page after successful registration
      res.redirect('/profile');
    });
  } catch (err) {
    // Handle errors, potentially send back to a signup page with an error message
    res.status(400).json(err);
  }
});

// Route for User Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Redirect to the profile page after successful login
      res.redirect('/profile');
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// User logout route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
