//This script is invoked by a click on the add to cart button on the product detail page.
//First it checks if user is logged in and if not redirects to signup-login.
//If user is logged in it proceeds to initialize a cart which will hold their cart items in an array in session storage so they persist if the user browses away from the current product detail page.
//The addToCartWithAuth function will push their chosen product into the array, capturing the product_id from the window location URL, and setting quantity to 1.
//The updateCartCount function will push text to the span on the nav bar's cart button (see main.handlebars) which increments count of items in the cart. 


// // This function initializes the cart from sessionStorage or creates an empty cart if not present
// function initializeCart() {
//     const storedCart = sessionStorage.getItem('cart');
//     return storedCart ? JSON.parse(storedCart) : [];
//   }
  
// // Calls initializeCart function and assigns its return value to the const cart. 
// let cart = initializeCart();
  

// // This function updates the cart count in the navbar. It is called within the addToCart function.
// function updateCartCount() {
//   const cartCountElement = document.getElementById('cartCount');
//     if (cartCountElement) {
//       cartCountElement.textContent = cart.length;
//       console.log('Cart count updated:', cart.length);
//     }
//   }
  
// // This function saves the cart to sessionStorage. It is called within the addToCart function.
// function saveCartToStorage() {
//   sessionStorage.setItem('cart', JSON.stringify(cart));
//   }
  
// // Function to add items to the cart with authentication check
// async function addToCartWithAuth() {
//     try {
//         // Make a request to the server to check authentication status
//         const response = await fetch('/api/users/status', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'credentials': 'include',
//             },
//         });

//         if (response.ok) {
//             const result = await response.json();

//             if (result.isAuthenticated) {
//                 // User is authenticated, proceed with addToCart logic
//                 const productId = window.location.pathname.match(/\/products\/(\d+)/)?.[1];
//                 cart.push({ product_id: parseInt(productId), quantity: 1 });
//                 updateCartCount();
//                 saveCartToStorage();
//             } else {
//                 // User is not authenticated, store the current URL so we can bring the user back here after they've logged in or signed up and redirect them to signup-login page
//                 sessionStorage.setItem('redirectUrl', window.location.href);
//                 alert('Redirecting you to our Sign Up/Login page. You must be logged in to place an order.');
//                 setTimeout(() => {
//                     window.location.href = '/signup-login';
//                 }, 2000);
//             }
//         } else {
//             console.error('Failed to check authentication status:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Error checking authentication status:', error);
//     }
// }
  
// // Calls updateCartCount on page load to initialize the cart count
// updateCartCount();

//This file includes code that will persist a cart's contents across various page relocations using session storage.
//It also includes functions to addToCart when the add to cart button is clicked from a product's detail page in the view 
//and to update the cart icon in the nav (main.handlebars) to show the number of items in the cart.

// This function initializes the cart from sessionStorage or creates an empty cart if not present
function initializeCart() {
    const storedCart = sessionStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
  
  // Initialize cart on page load
  let cart = initializeCart();
  
  // Function to update the cart count in the navbar
  function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
      cartCountElement.textContent = cart.length;
      console.log('Cart count updated:', cart.length);
    }
  }
  
  // Function to save the cart to sessionStorage
  function saveCartToStorage() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Function to add items to the cart
  function addToCart() {
    // Extract productId from the URL of the current page
    const productId = window.location.pathname.match(/\/products\/(\d+)/)?.[1];
    // Add the product to the cart array with a quantity of 1
    cart.push({ product_id: parseInt(productId), quantity: 1 });
    // Call to the function that updates the cart count in the navbar
    updateCartCount();
    // Call to the function that saves the cart to sessionStorage
    saveCartToStorage();
  }
  
  // Calls updateCartCount on page load to initialize the cart count
  updateCartCount();
  

