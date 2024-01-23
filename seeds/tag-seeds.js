const { Tag } = require('../models');

const tagData = [
  { tag_name: "Plain", price_adjustment: 0 },
  { tag_name: "Add pom-pom", price_adjustment: 6.00 },
  { tag_name: "Add applique text/logo", price_adjustment: 8.00 },
  { tag_name: "Add embroidered custom text", price_adjustment: 6.00 },
  { tag_name: "Add embroidered custom logo", price_adjustment: 10.00 },
  { tag_name: "Add embroidered custom text and logo", price_adjustment: 12.00 },
  { tag_name: "Lavender #B684B5" },
  { tag_name: "Slate Blue #2867A1" },
  { tag_name: "Seafoam #B6DCCF" },
  { tag_name: "Emerald #43A66E" },
  { tag_name: "Mustard #EDA400" },
  { tag_name: "Traffic Cone #EF5424" },
  { tag_name: "Raspberry #FF1493" },
  { tag_name: "Black #000000" },
  { tag_name: "White #FFFFFF" },
  { tag_name: "One size -- adjustable by design" }, 
  { tag_name: "Army Green #505C52" },
  { tag_name: "Cyan Blue #434E68" },
  { tag_name: "Khaki #BCAA93" },
  { tag_name: "Gray #98999E" },
  { tag_name: "Yellow #CD9240" },
  { tag_name: "Pink #F19CBF" },
  { tag_name: "Burgundy #A24455" },
  { tag_name: "Purple #7D5B8B" },
  { tag_name: "Orange #E57369" },
  { tag_name: "Lake Blue #3E80B3" },
  { tag_name: "Coffee #594E4C" },
  { tag_name: "Blue #594E4C" },
  { tag_name: "Wool" },
  { tag_name: "Cotton" },
  { tag_name: "Wooly hat" },
  { tag_name: "Toque" },
  { tag_name: "Dad's hat" },
  { tag_name: "Trucker's hat" },
  { tag_name: "Snapback" },
  { tag_name: "Tam" },
  { tag_name: "Docker" },
  { tag_name: "French artist's hat" },
  { tag_name: "S-M-L" },
  { tag_name: "Blush #F28AB5" },
  { tag_name: "Magenta #9B076E" },
  { tag_name: "Sky #62A6EC" },
  { tag_name: "Navy #14274C" },
  { tag_name: "Hunter #152E32" },
  { tag_name: "Green #414C24" },
  { tag_name: "Celadon #90937B" },
  { tag_name: "Concrete #8DA0AF" },
  { tag_name: "Rock #8692A0" },
  { tag_name: "Charcoal #2B2A2C" }, 
  { tag_name: "Lemon #F9D510" },
  { tag_name: "Gold #F5AD07" },
  { tag_name: "Red #AB0217" },
  { tag_name: "Maroon #450920" },
  { tag_name: "Terra Cotta #7B2727" },
  { tag_name: "Espresso #32191C" },
  { tag_name: "Mocha #7C6058" },
  { tag_name: "Cafe Latte #B18567" },
  { tag_name: "Oatmeal #DFCACC" },
  { tag_name: "Off White #E4E7F9" },
  { tag_name: "Brick with Floral Embroidery #C22B0A", price_adjustment: 7.00 },
  { tag_name: "Green with Floral Embroidery #0E302C", price_adjustment: 7.00 },
  { tag_name: "Red with Floral Embroidery #C4021B", price_adjustment: 7.00 },
  { tag_name: "Black with Floral Embroidery #0B080D", price_adjustment: 7.00 },
  { tag_name: "Beige with Floral Embroidery #C3A79A", price_adjustment: 7.00 },
  { tag_name: "Cream with Floral Embroidery #D2CEBD", price_adjustment: 7.00 },
  { tag_name: "Wool-felt" },
  { tag_name: "Fisherman's hat" },
  { tag_name: "Light-blue #8CBCE9"},
  { tag_name: "Light-pink #F5CBE3" },
  { tag_name: "Light-yellow #E8DE6F" },
  { tag_name: "Hot Pink #CD367B" },
  { tag_name: "XS-3X" },
  { tag_name: "Safari hat" },
  { tag_name: "Hiking hat" },
  { tag_name: "Traveler hat" },
  { tag_name: "Mushroom #B6B19E" },
  { tag_name: "Moss #7D7D70" },
  { tag_name: "Cloudy Sky #6C91AD" },
  { tag_name: "Rock #928074" },
  { tag_name: "Cotton-canvas" },
  { tag_name: "Knitted hat" },
  { tag_name: "XS-S-M-L-XL"}
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;


