const express = require('express');
const router = express.Router();
const { ProductTag } = require('../../models');

// Get all product-tag associations
// GET http://localhost:3001/api/product-tags
router.get('/', async (req, res) => {
  try {
    const productTagData = await ProductTag.findAll();
    res.json(productTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get a specific product-tag association by ID
// GET http://localhost:3001/api/product-tags/5 (last number is changeable, a product tag id)
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
// Two sample product-tag-seeds to serve as a model when creating the req.body: { product_id: 1, tag_id: 6 },{ product_id: 1, tag_id: 7 },
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
// PUT http://localhost/api/product-tags/9 (number is changeable, a product-tag id)
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
// DELETE http://localhost:3001/api/product-tags/2 (number is changeable, a product-tag id)
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
