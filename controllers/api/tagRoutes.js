const express = require('express');
const router = express.Router();
const { Tag } = require('../../models');

// Get all tags
// GET http://localhost:3001/api/tags
// Tested by KW. Works. Should consider restricting access to managers
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
// Tested by KW. Works. Should consider restricting access to managers
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
// POST http://localhost:3001/api/tags Sample req.body: {"tag_name": "one size fits all"}
// Tested by KW. Works. Was able to add "one size fits all" as tag_id 83. Should consider restricting access only to those in role of manager.
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
//PUT http://localhost:3001/api/tags/83 (last number is changeable, a tag id)
// Tested by KW. Works. I was able to update "One size fits all" to "one size fits most" with this req.body: {"tag_name": "one size fits most"}. Should consider making this a route restricted to managers
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
// DELETE http://localhost:3001/api/tags/83 (last number is changeable, a tag id)
// Tested by KW. Works. Was able to remove the tag I created. Should consider making this a route restricted to managers. 
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
