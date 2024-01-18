const {Category} = require ('../models');

const categoryData = [
    {
        category_name: 'Sports',
    },
    {
        category_name: 'Professional',
    },
    {
        category_name: 'Specialized',
    },
    {
        category_name: 'Outdoors',
    },
    {
        category_name: 'Formal',
    },
    {
        category_name: 'Party',
    },
    {
        category_name: 'Womens'
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories; 