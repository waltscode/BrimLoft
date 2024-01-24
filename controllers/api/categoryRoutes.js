const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Route to view all categories, comes with all info for the products in the category. 
// GET http://localhost:3001/api/categories. Tested by KW. Works.
router.get('/', (req, res) => {

  Category.findAll({
    include: [
      {
        model: Product,
      
      }
    ]
  })
  .then(categoryData => {
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Route to view a particular category by its ID
// GET http://localhost:3001/api/categories/5 Tested by KW. Works. Category 5 data (Specialty hats) comes back with associated product info
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {include: [
    {
      model: Product,
    
    }
  ]}).then(categoryData => {
    res.json(categoryData);  
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Route to create a new category. Tried with the following req.body: {"category_name": "Children's Hats", "quote": "When you come to love hats as a child you will be devoted to hat-wearing your whole life long", description": "A selection of many of our hat styles for adults but made in children's sizes, together with some styles that were designed for children only."}
// POST http://localhost:3001/api/categories Tested by KW. Works.
// Should probably protect this route as in userRoutes.js so it is available for managers only. Need to require in withAuth and add additional code below.
router.post('/', (req, res) => { 
  Category.create(req.body).then(categoryData => {
    res.json(categoryData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// Route to update a category by its `id` value. Used the following req.body for testing with the newly created category id 7: children's hats: {"description": "A selection of many of our hat-styles for adults but made in children's sizes, together with some styles that were designed for children only. Featuring the very popular Jemima Duck line of Beatrix Potter inspired head-dresses."}
// PUT http://localhost:3001/api/categories/7. Tested by KW. Works.
// Should probably protect this route as in userRoutes.js so it is available for managers only. Need to require in withAuth and add additional code below.
router.put('/:id', (req, res) => { 
  Category.update(req.body, {where: {id: req.params.id}}).then(categoryData => {
    res.json(categoryData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Route to delete a category by its 'id' value. 
// DELETE http://localhost:3001/api/categories/7  Tested by KW. Works.
router.delete('/:id', (req, res) => {
  
  Category.destroy({where: {id: req.params.id}}).then(categoryData => {
    res.json(categoryData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;