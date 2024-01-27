const router = require('express').Router();
const { OrderItem, Order, Product, Tag } = require('../../models');
const withAuth = require('../../utils/auth');

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


// POST /order-items/add-items-to-existing-order
// Use case for this route is when the user has already created an order by taking items in their cart to checkout, then wants to return to shopping and add more items to their existing order from the store.
// Includes logic to update order-items table to reflect added products with same order_id as existing order and to update total_amount value in the Order table to reflect the additions.
// Tested by KW.  Works.
router.post('/add-items-to-existing-order', withAuth, async (req, res) => {
  try {
    const { order_id, cart } = req.body;

    // Fetch order
    const order = await Order.findByPk(order_id);

    // Fetch existing total_amount
    const existingTotalAmount = parseFloat(order.total_amount);

    // Calculate price_at_purchase and create order-items
    const orderItems = await Promise.all(cart.map(async (item) => {
      const product = await Product.findByPk(item.product_id);
      const tags = await product.getTags();
      const price_adjustment = tags.reduce((total, tag) => total + tag.price_adjustment, 0);

      // Use toFixed to round to 2 decimal places
      const price_at_purchase = ((product.price + price_adjustment) * item.quantity).toFixed(2);

      // Create order-item
      const orderItem = await OrderItem.create({
        order_id,
        product_id: item.product_id,
        quantity: item.quantity,
        price_at_purchase,
      });

      return {
        orderItem,
        product,
      };
    }));

    // Sum up the total amount for all items in the order
    const newTotalAmount = existingTotalAmount + orderItems.reduce((total, item) => parseFloat(item.orderItem.price_at_purchase) + total, 0);

    // Update total_amount in the order using Promise.all
    await Promise.all([
      Order.update({ total_amount: newTotalAmount.toFixed(2).toString() }, { where: { id: order.id } }),
      console.log('Order update completed'),
    ]);

    // Retrieve the updated order
    const updatedOrder = await Order.findByPk(order.id);

    console.log('Updated Order:', updatedOrder);

    // Response with the order data including order-items
    res.status(201).json({ order: updatedOrder, orderItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


//Front end use of order-item update route is when user wants to adjust a quantity or tag (eg. colour, customization, size) of an item in their cart without removing it entirely   
// Update an order item by ID
// PUT http://localhost:3001/api/orderItems/67 (last number is changeable, an order-item id)
// Tested by KW. Works.  Includes logic to update price_at_purchase value in order-items table and total_amount value in order table
router.put('/:id', async (req, res) => {
  try {
    const { quantity } = req.body;

    // Fetch the order item
    const orderItem = await OrderItem.findByPk(req.params.id, {
      include: Product, // Include the associated product
    });

    if (!orderItem) {
      res.status(404).json({ error: 'Order Item not found' });
      return;
    }

    // Calculate the updated price_at_purchase
    const productPrice = parseFloat(orderItem.product.price); // Convert to numeric value
    const updatedQuantity = parseFloat(quantity); // Convert to numeric value

    // Check if the conversion is successful
    if (isNaN(productPrice) || isNaN(updatedQuantity)) {
      res.status(400).json({ error: 'Invalid quantity or product price' });
      return;
    }

    const updatedPriceAtPurchase = productPrice * updatedQuantity;

    // Update the order item
    orderItem.quantity = updatedQuantity;
    orderItem.price_at_purchase = updatedPriceAtPurchase.toFixed(2); // Round to 2 decimal places
    await orderItem.save();

    // Fetch the associated order
    const order = await Order.findByPk(orderItem.order_id, {
      include: OrderItem, // Include the associated order items
    });

    // Calculate the updated total_amount
    const updatedTotalAmount = order.orderItems.reduce((total, item) => total + parseFloat(item.price_at_purchase), 0);

    // Check if the conversion is successful
    if (isNaN(updatedTotalAmount)) {
      res.status(500).json({ error: 'Error calculating total amount' });
      return;
    }

    // Update the total_amount in the Order table
    await Order.update({ total_amount: updatedTotalAmount.toFixed(2) }, { where: { id: order.id } });

    res.json(orderItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete an order item by ID
// DELETE http://localhost:3001/api/orderItems/7 (last number is changeable, an order-item id)
// Tested by KW.  Works
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
  