const router = require('express').Router();
const { OrderItem, Product, Tag } = require('../../models');

//The GET routes for order items will retrieve information about the items in a user's shopping cart or order history. They'll display the contents of the user's cart or order -- details like product information, quantities, and prices.
// View all order items (ie. all the items, arranged by order, for every order that's ever been placed in the store )
// GET http://localhost:3001/api/order-items
// Tested by KW. Works
router.get('/', (req, res) => {
    OrderItem.findAll({
      include: [
        {
          model: Product,
        }
      ]
}).then(orderItemData => {
    console.log(orderItemData); // Log the retrieved data
    res.json(orderItemData);
}
).catch(err => {
    console.log(err);
    res.status(500).json(err);
});
}
);

// View a specific order item by ID
//GET http://localhost:3001/api/order-items/20 (number at the end is changeable, refers to an order-item id)
// Tested by KW. Works
router.get('/:id', async (req, res) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    
    if (!orderItem) {
      res.status(404).json({ error: 'Order Item not found' });
      return;
    }

    res.json(orderItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Front end, the user clicks on add item to cart, order is immediately opened, and what was formerly a product in the store becomes an item in the order (customer's shopping cart).
// Create a new order item, invoked when a customer puts a product in their cart, which, with certain products, will have price adjustment information included in TagIds.
// POST http://localhost:3001/api/orderItems
// Sample seed from orderitem-seeds to user as a model for the req.body: {order_id: 1, product_id: 1, quantity: 2, price_at_purchase: 39.98, tagIds: [1, 1], // TagId for "Plain"},
// router.post('/create', async (req, res) => {
//     try {
//       const { productId, tagIds, quantity } = req.body;
  
//       // Retrieve price adjustments for selected customization options
//       const priceAdjustments = await Tag.findAll({
//         where: {
//           id: tagIds,
//         },
//         attributes: ['price_adjustment'],
//       });
  
//       // Calculate total price adjustment
//       const totalAdjustment = priceAdjustments.reduce((sum, tag) => sum + tag.price_adjustment, 0);
  
//       // Retrieve default product price
//       const product = await Product.findByPk(productId);
//       const basePrice = product.price;
  
//       // Calculate adjusted price_at_purchase
//       const adjustedPrice = basePrice + totalAdjustment;
  
//       // Create order item with the calculated price
//       const orderItem = await OrderItem.create({
//         product_id: productId,
//         quantity,
//         price_at_purchase: adjustedPrice,
//       });
  
//       res.json(orderItem);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
// Example route to add items to an existing order
router.post('/add-items', async (req, res) => {
  try {
    const { order_id, product_id, quantity, tagIds } = req.body;

    // Check if the order exists
    const existingOrder = await Order.findByPk(order_id);
    if (!existingOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Retrieve price adjustments for selected customization options
    const priceAdjustments = await Tag.findAll({
      where: {
        id: tagIds,
      },
      attributes: ['price_adjustment'],
    });

    // Calculate total price adjustment
    const totalAdjustment = priceAdjustments.reduce((sum, tag) => sum + tag.price_adjustment, 0);

    // Retrieve default product price
    const product = await Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Calculate adjusted price_at_purchase
    const adjustedPrice = (product.price + totalAdjustment) * quantity;

    // Create new order item associated with the existing order
    const newOrderItem = await OrderItem.create({
      order_id,
      product_id,
      quantity,
      price_at_purchase: adjustedPrice,
    });

    res.json(newOrderItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//Front end use of order-item update route is when user wants to adjust a quantity or tag (eg. colour, customization, size) of an item in their cart without removing it entirely  
// Update an order item by ID
//PUT http://localhost:3001/api/orderItems/7 (last number is changeable, an order-item id) 
router.put('/:id', async (req, res) => {
  try {
    const { quantity } = req.body;

    const orderItem = await OrderItem.findByPk(req.params.id);

    if (!orderItem) {
      res.status(404).json({ error: 'Order Item not found' });
      return;
    }

    // Update the quantity
    orderItem.quantity = quantity;
    await orderItem.save();

    res.json(orderItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete an order item by ID
// DELETE http://localhost:3001/api/orderItems/7 (last number is changeable, an order-item id)
router.delete('/:id', async (req, res) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);

    if (!orderItem) {
      res.status(404).json({ error: 'Order Item not found' });
      return;
    }

    // Delete the order item
    await orderItem.destroy();

    res.json({ message: 'Order Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
  