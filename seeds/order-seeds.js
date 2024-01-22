const { Order, Product, Tag, ProductTag } = require('../models');

const orderData = [
    {
      user_id: 1, // JohnW
      total_amount: 39.98, // Assuming purchasing two plain Beanie hats
      order_date: new Date('2020-05-09'),
    },
    {
      user_id: 2, // StasM
      total_amount: 50.98, // Assuming purchasing one Beanie hat with pom pom customization and one plain Baseball Hat
      order_date: new Date('2020-06-15'),
    },
    {
      user_id: 3, // SamS
      total_amount: 37.99, // Assuming purchasing one Beret with applique text/logo customization
      order_date: new Date('2020-07-20'),
    },
    {
      user_id: 4, // NickLee
      total_amount: 119.95, // Assuming purchasing three plain Beanie hats and two plain Berets
      order_date: new Date('2020-08-10'),
    },
    {
      user_id: 5, // KarlaW
      total_amount: 71.97, // Assuming purchasing two plain Baseball Hats and one plain Bucket Hat
      order_date: new Date('2020-09-05'),
    },
    {
      user_id: 6, // AlejandroR
      total_amount: 75.97, // Assuming purchasing 2 beanies (one plain, one custom) and 1 bucket hat with customized text
      order_date: new Date('2021-02-18'), 
    },
    {
      user_id: 7, // MeiChen
      total_amount: 75.97, // Assuming purchasing 2 beanies (one plain, one with text/logo custom applique) and 1 outback hat
      order_date: new Date('2021-04-05'), 
    },
    {
      user_id: 8, // HassanAli
      total_amount: 96.96, // Assuming purchasing 3 baseball hats and 1 plain bucket hat
      order_date: new Date('2021-05-12'),
    },
    {
      user_id: 9, // IzzyS
      total_amount: 98.97, // Assuming purchasing 1 plain beret, 1 beret with floral embroidery, and 1 bucket hat with custom logo
      order_date: new Date('2021-07-02'), 
    },
    {
      user_id: 10, // RajPatel
      total_amount: 86.97, // Assuming purchasing 1 beanie with applique, 1 baseball hat with custom text, and 1 plain outback hat
      order_date: new Date('2021-08-15'), 
    },
];

const seedOrders = () => Order.bulkCreate(orderData);
      
module.exports = seedOrders;

  