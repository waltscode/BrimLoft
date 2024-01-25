const express = require('express');
const router = express.Router();
const withAuth = require('../../utils/auth.js');
const { Order, OrderItem, Product, User, Tag } = require('../../models');

// The `/api/orders` endpoint

// Route to view all orders. Has user data, product/order-item data associated.
// GET http://localhost:3001/api/orders
// Tested by KW.  Works.  Code uses an indirect approach to add in the info from the orderItems table because the route kept failing in the first way I tried to do it (just including all the data I wanted)
router.get('/', async (req, res) => {
    try {
      const orderData = await Order.findAll({
        include: [
            {
                model: User, // Include the User model
                attributes: ['username'],
            },
        ],
      });
      // Map through orderData and fetch associated OrderItems and Products
    const ordersWithItems = await Promise.all(
        orderData.map(async (order) => {
          const orderItems = await OrderItem.findAll({
            where: {
              order_id: order.id,
            },
            include: [
              {
                model: Product,
                attributes: ['name', 'price', 'num_in_stock', 'category_id'],
              },
            ],
          });
            return {
                ...order.toJSON(),
                OrderItems: orderItems,
            };
        }));
  
      res.json(ordersWithItems);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Route to view one order by its `id` value
// GET http://localhost:3001/api/orders/2
// Tested by KW. Works.
router.get('/:id', async (req, res) => {
    try {
        // Find one order by its `id` value
        const orderData = await Order.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: OrderItem,
                    include: [
                        {
                            model: Product,
                            attributes: ['name', 'price', 'num_in_stock', 'category_id'],
                        },
                    ],
                },
            ],
        });

        res.json(orderData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//Route to create a new order
//POST http://localhost:3001/api/orders.  I logged in as KarlaW before starting this test, otherwise the cookie won't be passed and the test will fail. Then I passed in the following req.body: {"user_id": 5, "total_amount": 27.99}.  KarlaW has successfully placed an order for one outback hat
//Tested by KW. Works.  Note: MUST LOG IN FIRST. Note2: data response object includes the timestamp which is generated according to dateNOW (the default) which is good. 
//Through the Sequelize associations this route will also update the OrderItems table to reflect all the new items in the newly created order.
//Note the price is not adjusted at the back end for any customizations, so total_amount needs to be passed in from the front and should reflect price_adjustment due to tags from FE logic.
// router.post('/create-new-order-at-checkout', async (req, res) => {
//     try {
//       // Log the user_id from the session to check its value
//       console.log("User ID from session:", req.session.user_id);
  
//       // Check if req.session.user_id is present before creating the order
//       if (!req.session.user_id) {
//         return res.status(401).json({ message: "User not authenticated" });
//       }
  
//       // Create the order
//       const order = await Order.create({ ...req.body, user_id: req.session.user_id });
  
//       // Create associated order items
//       const { product_id, quantity } = req.body;
  
//       // Retrieve the product's price based on the product_id
//       const product = await Product.findByPk(product_id);
//       if (!product) {
//         return res.status(404).json({ message: "Product not found" });
//       }
  
//       // Calculate the price_at_purchase dynamically
//       const price_at_purchase = product.price * quantity;
  
//       await OrderItem.create({
//         order_id: order.id,
//         product_id,
//         quantity,
//         price_at_purchase,
//       });
  
//       res.json(order);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json(err);
//     }
//   });




// POST /orders/create-new-order-at-checkout
router.post('/create-new-order-at-checkout', withAuth, async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    // Assuming req.body.cart contains an array of product_ids and quantities
    const { cart } = req.body;
    console.log('Cart:', cart);

    // Fetch user_id from the session
    const { user_id } = req.session.user;

    // Create a new order
    const order = await Order.create({
      user_id,
      total_amount: 0, // Will be updated later
    });

    // Calculate price_at_purchase and create order-items
    const orderItems = await Promise.all(cart.map(async (item) => {
      const product = await Product.findByPk(item.product_id);
      const tags = await product.getTags();
      const price_adjustment = tags.reduce((total, tag) => total + tag.price_adjustment, 0);
      const price_at_purchase = (product.price + price_adjustment) * item.quantity;

      // Create order-item
      const orderItem = await OrderItem.create({
        order_id: order.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price_at_purchase,
      });

      return {
        orderItem,
        product,
      };
    }));

    // Update total_amount in the order
    const total_amount = orderItems.reduce((total, item) => total + item.orderItem.price_at_purchase, 0);
    await Order.update({ total_amount }, { where: { id: order.id } });

    // Response with the order data including order-items
    res.status(201).json({ order, orderItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;


// To have the complete set of CRUD operations for each model endpoint there would be a PUT one here to update Order.  However, practical use case would have the user updating their cart by updating individual items in the cart. So there is a PUT route included for orderItemRoutes but not here for orderRoutes.
// Delete an order by its `id` value.
// DELETE http://localhost:3001/api/orders/19 (end number is an order id and can change)
// Tested by KW. Works.
router.delete('/:id', (req, res) => {
    // delete a order by its `id` value
    Order.destroy({
        where: {
        id: req.params.id
        }
    }).then(orderData => {
        if (!orderData) {
        res.status(404).json({ message: 'No order found with this id' });
        return;
        }
        res.json(orderData);
    }
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    }
);

module.exports = router;





