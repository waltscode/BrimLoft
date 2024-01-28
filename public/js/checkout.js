// This file contains the createOrder function which responds to a click on the cart when it has items in it.
// This function will put in a post call to the api/orders/create-new-order-at-checkout endpoint, using the cart data it has created and stored in session storage..
// The api call will result in an order_id being assigned to the group of items in the order table and it will update the order-items table so that these products from the cart are all associated both with both the order_id (associated with a user) and with the product_id of all the individual products in the order
// We then have access to all that data at the front end to render it to the order summary view in checkout.handlebars


function createOrder() {
    // Whatever page the user is on when they click the cart button on the nav they will be redirected to the /checkout endpoint (ie. the view rendered by checkout.handlebars)
    window.location.href = '/checkout'
    // Get the cart data from sessionStorage (we put items in the 'cart' in session story as they were added as part of the addToCart function defined in public/js/cart.js) Now we are going to retrieve them.
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  
    // Prepare the request body
    const requestBody = {
      cart: cart,
    };
  
    // Make a POST request to the server
    fetch('/api/orders/create-new-order-at-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(orderData => {
      // Call the function which will render the order data (function is defined below)
      renderOrderSummary(orderData);
    })
    .catch(error => {
      console.error('Error creating order:', error);
    });
  }


// Function to render order summary
function renderOrderSummary(orderData) {
    // Access the orderItems array from orderData
    const orderItems = orderData.orderItems;
  
    // Select the list group container in the DOM
    const listGroupContainer = document.querySelector('.list-group');
  
    // Iterate over each order item and generate the HTML dynamically
    orderItems.forEach((orderItem) => {
      // Create a list group item element
      const listGroupItem = document.createElement('div');
      listGroupItem.classList.add('list-group-item');
  
      // Create the content for the list group item
      const content = `
        <div class="d-flex w-100 justify-content-between">
          <img src="${orderItem.product.image1_url}" alt="${orderItem.product.name}" class="order-item-image">
          <h5 class="mb-1">${orderItem.product.name}</h5>
          <p class="mb-1">Price: $${orderItem.product.price}</p>
          <select class="custom-select quantity-dropdown">
            ${generateQuantityOptions(orderItem.quantity)}
          </select>
        </div>
      `;
  
      // Set the innerHTML of the list group item
      listGroupItem.innerHTML = content;
  
      // Append the list group item to the container
      listGroupContainer.appendChild(listGroupItem);
    });
  
    // You can add similar logic for subtotal, shipping, taxes, and total
  }
  
  // Helper function to generate quantity options for the dropdown
  function generateQuantityOptions(selectedQuantity) {
    let options = '';
  
    for (let i = 0; i <= 9; i++) {
      options += `<option value="${i}" ${selectedQuantity === i ? 'selected' : ''}>${i}</option>`;
    }
  
    return options;
  }
  
  
  
  