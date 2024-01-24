const express = require('express');
const router = express.Router();
const { ProductTag } = require('../../models');

// Get all product-tag associations
// GET http://localhost:3001/api/product-tags
// Tested by KW. Works. 
router.get('/', async (req, res) => {
  try {
    const productTagData = await ProductTag.findAll();
    res.json(productTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// View a specific product-tag association by ID
// GET http://localhost:3001/api/product-tags/5 (last number is changeable, a product tag id)
// Tested by KW. Works. 
router.get('/:id', async (req, res) => {
  try {
    const productTagData = await ProductTag.findByPk(req.params.id);
    res.json(productTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new product-tag association
// POST http://localhost:3001/api/product-tags
// Tested by KW. Works. I was able to associate bucket hat (product_id: 4) with tag_id: 11 (mustard). Req.body: {"product_id": "4", "tag_id": "11"} Now the store offers bucket hats in the colour mustard. This product-tag association is represented by the product_tag_id: 131.
router.post('/', async (req, res) => {
    try {
      const productTagData = await ProductTag.create(req.body);
      res.json(productTagData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Update a product-tag association by ID
// PUT http://localhost/api/product-tags/131 (number is changeable, a product-tag id)
// Tested by KW. Works. I was able to substitute colour Seafoam (tag_id 9) for Mustard (tag_id 11) in the product-tag association I made at the post route above 
router.put('/:id', async (req, res) => {
  try {
    const productTagData = await ProductTag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(productTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete a product-tag association by ID
// DELETE http://localhost:3001/api/product-tags/131 (number is changeable, a product-tag id)
// Tested by KW. Works. I was able to remove the association between bucket hat and seafoam (product_tag_id: 131).
router.delete('/:id', async (req, res) => {
  try {
    const productTagData = await ProductTag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(productTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
