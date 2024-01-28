//This file renders the signup-login page (front end) when /signup-login endpoint is hit
const router = require('express').Router();

// Define the route for "/checkout"
router.get('/signup-login', (req, res) => {
  // Render the "checkout.handlebars" template
  res.render('signup-login');
});

module.exports = router;
