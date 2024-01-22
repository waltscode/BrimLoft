// handlebarsHelpers.js

// Format date helper
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Format currency helper
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
  }).format(amount);
};

// Truncate text helper
const truncate = (text, length) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};

module.exports = {
  formatDate,
  formatCurrency,
  truncate
};
