const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'baseball cap',
  },
  {
    tag_name: 'snapback',
  },
  {
    tag_name: 'beanie',
  },
  {
    tag_name: 'fedora',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;


