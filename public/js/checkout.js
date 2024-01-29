// This file contains the createOrder function which responds to a click on the cart when it has items in it.
// This function will put in a post call to the api/orders/create-new-order-at-checkout endpoint, using the cart data it has created and stored in session storage..
// The api call will result in an order_id being assigned to the group of items in the order table and it will update the order-items table so that these products from the cart are all associated both with both the order_id (associated with a user) and with the product_id of all the individual products in the order
// We then have access to all that data at the front end to render it to the order summary view in checkout.handlebars


// Variable and constant initialization
let subtotal = 0;
let shippingCost = 9.99; // Default shipping cost
let taxes = 0;
let orderTotal = 0;
let orderItems = []; // Assuming this is declared globally to store order items

// Function to replace the page and initiate the order creation process
function createOrder() {

  // Get the cart data from sessionStorage
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Prepare the request body
  const requestBody = {
    cart: cart,
  };

  // Make a POST request to create a new order
  fetch('/api/orders/create-new-order-at-checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(response => response.json())
    .then(orderData => {
      // Log the order data
      console.log('Order Data:', orderData);

      // Update the global orderItems array
      orderItems = orderData.orderItems;

      // Call the function to render the order summary
      console.log('Calling renderOrderSummary');
      renderOrderSummary(orderData);
    })
    .catch(error => {
      console.error('Error creating order:', error);
    });
}

// Function to render order summary
function renderOrderSummary(orderData) {
  console.log('Entering renderOrderSummary');
  // Access the orderItems array from orderData
  const orderItems = orderData.orderItems;
  console.log('Order Items:', orderItems);

  // Select the list group container in the DOM
  const listGroupContainer = document.querySelector('.list-group');

  // Clear existing content in the list group container
  listGroupContainer.innerHTML = '';

  // Iterate over each order item and generate the HTML dynamically
  orderItems.forEach((orderItem) => {
    // Create a list group item element
    const listGroupItem = document.createElement('div');
    listGroupItem.classList.add('list-group-item');

    // Create the content for the list group item
    const content = `
      <div class="d-flex w-100 justify-content-between">
    
        <h5 class="mb-1">${orderItem.product.name}</h5>
        <p class="mb-1">Price: $${orderItem.orderItem.price_at_purchase}</p>
        <select class="custom-select quantity-dropdown" data-orderitemid="${orderItem.orderItem.id}">
          ${generateQuantityOptions(orderItem.quantity)}
        </select>
      </div>`;

    // Update itemTally with the price_at_purchase of the current order item
    subtotal += orderItem.orderItem.price_at_purchase;

    // Set the innerHTML of the list group item
    listGroupItem.innerHTML = content;

    // Append the list group item to the container
    listGroupContainer.appendChild(listGroupItem);
  });

  // Calculate taxes as 15% of the sum of itemTally and shipping
  taxes = (subtotal + shippingCost) * 0.15;

  // Calculate the total by summing up itemTally, shipping, and taxes
  orderTotal = subtotal + shippingCost + taxes;

  // Render Subtotal, Shipping, Taxes, and Total
  renderOrderTotalElements(subtotal, shippingCost, taxes, orderTotal);
  console.log('Exiting renderOrderSummary');
}
  

// Helper function to generate quantity options for the dropdown
function generateQuantityOptions(selectedQuantity) {
  let options = '';

  for (let i = 0; i <= 9; i++) {
    options += `<option value="${i}" ${selectedQuantity === i ? 'selected' : ''}>${i}</option>`;
  }

  return options;
}

// Helper function to render Subtotal, Shipping, Taxes, and Total
function renderOrderTotalElements(itemTally, shippingCost, taxes, orderTotal) {
  // Replace 'elementId' with the actual IDs of the elements in your HTML
  document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById('shippingCost').innerText = `$${shippingCost.toFixed(2)}`;
  document.getElementById('orderItemsTaxes').innerText = `$${taxes.toFixed(2)}`;
  document.getElementById('orderTotal').innerText = `$${orderTotal.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const listGroupContainer = document.querySelector('.list-group');

  listGroupContainer.addEventListener('change', async function (event) {
    if (event.target.classList.contains('quantity-dropdown')) {
      // Call the function to update totals and handle deletions
      await updateTotalAndHandleDeletions(event.target);
    }
  });
});

// Helper function to update totals
async function updateTotal() {
  try {
    // Recalculate subtotal, taxes, and total
    subtotal = orderItems.reduce((total, item) => total + item.orderItem.price_at_purchase, 0);
    taxes = (subtotal + shippingCost) * 0.15;
    orderTotal = subtotal + shippingCost + taxes;

    // Render the updated totals
    renderOrderTotalElements(subtotal, shippingCost, taxes, orderTotal);
    console.log('Updated Order Items:', updatedOrderItems);

    // Update quantities and handle deletions
    const quantityDropdowns = document.querySelectorAll('.quantity-dropdown');
    const updatedOrderItems = [];

    for (const dropdown of quantityDropdowns) {
      const orderItemId = dropdown.getAttribute('data-orderitemid');
      const selectedQuantity = parseInt(dropdown.value);

      // Handle deletion if quantity is zero
      if (selectedQuantity === 0) {
        // Make a DELETE request to remove the order item
        try {
          await fetch(`/api/order-items/${orderItemId}`, {
            method: 'DELETE',
          });
        } catch (error) {
          console.error('Error deleting order item:', error);
        }
      } else {
        // Update the quantity for the order item
        const updatedItem = orderItems.find((item) => item.orderItem.id === orderItemId);
        updatedItem.quantity = selectedQuantity;
        updatedOrderItems.push(updatedItem);

        // Make a PUT request to update the order item quantity on the server
        try {
          await fetch(`/api/order-items/${orderItemId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity: selectedQuantity }),
          });
        } catch (error) {
          console.error('Error updating order item:', error);
        }
      }
    }

    // Update orderItems array with the modified quantities
    orderItems.length = 0;
    Array.prototype.push.apply(orderItems, updatedOrderItems);
  } catch (error) {
    console.error('Error updating totals:', error);
  }
}

// Call the createOrder function when the script is loaded
createOrder();


  
  
  
  