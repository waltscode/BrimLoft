const Handlebars = require('express-handlebars');

const hbs = Handlebars.create({
  helpers: {
    format_amount: function (value) {
      // Existing format_amount helper
      return `$${parseFloat(value).toFixed(2)}`;
    },
    format_date: function (date) {
      // Format the date as a readable string
      return new Date(date).toLocaleDateString();
    },
    
    
  }
});

module.exports = hbs;
