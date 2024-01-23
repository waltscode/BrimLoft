const express = require('express');
const router = express.Router();
const { Tag } = require('../../models');

// Get all tags
// GET http://localhost:3001/api/tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get a specific tag by ID
// GET http://localhost:3001/api/tags/6 (last number is changeable, a tag id)
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id);
    res.json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new tag
// POST http://localhost:3001/api/tags
// Two sample tag seeds as a model for the req.body: { tag_name: "Add embroidered custom text and logo", price_adjustment: 12.00 },{ tag_name: "Lavender #B684B5" },
router.post('/', async (req, res) => {
    try {
      const tagData = await Tag.create(req.body);
      res.json(tagData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Update a tag by ID
//PUT http://localhost:3001/api/tags/8 (last number is changeable, a tag id)
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete a tag by ID
// DELETE http://localhost:3001/api/tags/8 (last number is changeable, a tag id)
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
