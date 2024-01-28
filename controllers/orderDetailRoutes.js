//This file renders the orderDetails page (front end) when /order-details endpoint is hit
const router = require('express').Router();

// Define the route for "/order-details"
router.get('/order-details', (req, res) => {
  // Render the "orderDetails.handlebars" template
  res.render('orderDetail');
});

module.exports = router;