const { OrderItem, Product, Tag, ProductTag, Order } = require('../models');

const orderItemData = [
    {
      order_id: 1, // Order from JohnW
      product_id: 1, // Beanie
      quantity: 2,
      price_at_purchase: 39.98, // assuming 2 beanies (19.99 * 2) + plain (0) + plain (0)
      tagIds: [1, 1], // TagId for "Plain"
    },
    {
      order_id: 2, // Order from StasM
      product_id: 1, // Beanie
      quantity: 1,
      price_at_purchase: 25.99, // assuming 1 beanie (19.99) + pom-pom customization (6.00) 
      tagIds: [2], // TagId for "Add pom-pom"
    },
    {
      order_id: 2, // Order from StasM
      product_id: 2, // Baseball Hat
      quantity: 1,
      price_at_purchase: 24.99, // assuming 1 baseball hat (24.99) + plain (0) 
      tagIds: [1], // TagId for "Plain"
    },
    {
      order_id: 3, // Order from SamS
      product_id: 3, // Beret
      quantity: 1,
      price_at_purchase: 37.99, // assume 1 beret (29.99) + applique text/logo customization (8.00)
      tagIds: [3], // TagId for "Add applique text/logo"
    },
    {
      order_id: 4, // Order from NickLee
      product_id: 1, // Beanie
      quantity: 3,
      price_at_purchase: 59.97, // assuming 3 beanies (19.99 * 3) + plain (0) + plain (0) + plain (0)
      tagIds: [1, 1, 1], // TagId for "Plain"
    },
    {
      order_id: 4, // Order from NickLee
      product_id: 3, // Beret
      quantity: 2,
      price_at_purchase: 59.98, // assume 2 berets (29.99 * 2) + plain (0) + plain (0)
      tagIds: [1, 1], // TagId for "Plain"
    },
    {
      order_id: 5, // Order from KarlaW
      product_id: 2, // Baseball Hat
      quantity: 2,
      price_at_purchase: 49.98, // assuming 2 baseball hats (24.99 * 2) + plain (0) + plain (0)
      tagIds: [1, 1], // TagId for "Plain"
    },
    {
      order_id: 5, // Order from KarlaW
      product_id: 4, // Bucket Hat
      quantity: 1,
      price_at_purchase: 21.99, // assuming 1 bucket hat (21.99) + plain (0)
      tagIds: [1], // TagId for "Plain"
    },
    {
      order_id: 6, // Order from AlejandroR
      product_id: 1, // Beanie
      quantity: 2,
      price_at_purchase: 47.98, // assuming 2 beanies (19.99 * 2) + plain (0) + applique with text/logo (8.00)
      tagIds: [1, 3], // TagId for "Plain" and "Add applique text/logo"
    },
    {
      order_id: 6, // Order from AlejandroR
      product_id: 4, // Bucket Hat
      quantity: 1,
      price_at_purchase: 27.99, // assuming 1 bucket hat (21.99) + Add embroidered custom text (6.00)
      tagIds: [4], // TagId for "Add embroidered custom text"
    },
    {
      order_id: 7, // Order from MeiChen
      product_id: 5, // Outback Hat
      quantity: 1,
      price_at_purchase: 27.99, // Assuming 1 outback hat (27.99) + plain (0)
      tagIds: [1], // TagId for "Plain"
    },
    {
      order_id: 7, // Order from MeiChen
      product_id: 1, // Beanie
      quantity: 2,
      price_at_purchase: 47.98, // Assuming 2 beanies (19.99 * 2) + plain (0) + applique with text/logo (8.00)
      tagIds: [1, 3], // TagIds for "Plain" and "Add applique text/logo"
    },
    {
      order_id: 8, // Order from HassanAli
      product_id: 2, // Baseball Hat
      quantity: 3,
      price_at_purchase: 74.97, // Assuming 3 baseball hats (24.99 * 3) + plain (0) + plain (0) + plain(0)
      tagIds: [1, 1, 1], // TagId for "Plain"
    },
    {
      order_id: 8, // Order from HassanAli
      product_id: 4, // Bucket Hat
      quantity: 1,
      price_at_purchase: 21.99, // Assuming 1 bucket hat (21.99) + plain (0)
      tagIds: [1], // TagId for "Plain"
    },
    {
      order_id: 9, // Order from IzzyS
      product_id: 3, // Beret
      quantity: 2,
      price_at_purchase: 66.98, // Assuming 2 berets (29.99 * 2) + one plain (0) + one with floral embroidery (7.00) 
      tagIds: [1, 62], // TagId for "Plain" and "Red with floral embroidery"
    },
    {
      order_id: 9, // Order from IzzyS
      product_id: 4, // Bucket Hat
      quantity: 1,
      price_at_purchase: 31.99, // Assuming 1 bucket hat (21.99) + embroidered custom logo (10.00)
      tagIds: [5], // TagId for "Add embroidered custom logo"
    },
    {
      order_id: 10, // Order from RajPatel
      product_id: 1, // Beanie
      quantity: 1,
      price_at_purchase: 27.99, // Assuming 1 beanie (19.99) + applique customization (8.00)
      tagIds: [3], // TagId for "Add applique text/logo"
    },
    {
      order_id: 10, // Order from RajPatel
      product_id: 2, // Baseball Hat
      quantity: 1,
      price_at_purchase: 30.99, // Assuming 1 baseball hat (24.99) + embroidered custom text (6.00)
      tagIds: [4], // TagId for "Add embroidered custom text"
    },
    {
      order_id: 10, // Order from RajPatel
      product_id: 5, // Outback Hat
      quantity: 1,
      price_at_purchase: 27.99, // Assuming 1 outback hat (27.99) + plain (0)
      tagIds: [1], // TagId for "Plain"
    },      
];

const seedOrderItems = () => OrderItem.bulkCreate(orderItemData);
         
module.exports = seedOrderItems;
  