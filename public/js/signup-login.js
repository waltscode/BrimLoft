document.addEventListener('DOMContentLoaded', function () {
    // Click listener on the parent element for event delegation
    const formContent = document.querySelector('.form-v9-content');

    formContent.addEventListener('click', function (event) {
        // Check if the clicked element or its parent has the toggler-link class
        const togglerLink = event.target.closest('.toggler-link');

        if (togglerLink) {
            event.preventDefault();

            // Toggle visibility of forms
            const signUpForm = document.getElementById('signup-form');
            const loginForm = document.getElementById('login-form');

            if (loginForm.style.display === 'none') {
                signUpForm.style.display = 'none';
                loginForm.style.display = 'block';
            } else {
                signUpForm.style.display = 'block';
                loginForm.style.display = 'none';
            }
        }
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     // Function to handle form submission
//     const handleFormSubmit = async (formId, endpoint) => {
//         const form = document.getElementById(formId);

//         form.addEventListener('submit', async (event) => {
//             event.preventDefault();

//         // // Clear previous error message
//         // document.getElementById('error-message').innerText = '';

//             // Create formData object to collect form data
//             const formData = new FormData(form);

//             try {
//                 // Make a POST request to the specified endpoint
//                 const response = await fetch(endpoint, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(Object.fromEntries(formData)),
//                 });

//                 if (response.ok) {
//                     // In cart.js we set the last URL the user was visiting when they tried to add to cart and were told they needed to login or signup into local storage. Here we are retrieving it so we can take them back there (or alternatively to the home page)
//                     const storedUrl = sessionStorage.getItem('redirectUrl') || '/';
//                     window.location.href = storedUrl;

//                     // Dynamically update the signup-login button text with user's first name
//                     const userResponse = await response.json();
//                     const welcomeButton = document.getElementById('signup-login-btn');
//                     if (welcomeButton) {
//                         welcomeButton.textContent = `Welcome ${userResponse.user.first_name}`;
//                     }

//                     // Log to console for verification
//                     console.log('User logged in successfully:', userResponse.user);
//                 } else {
//                     // Handle error response, e.g., display error message
//                     const data = await response.json();
//                     console.error('Error:', data.message);
//                     // Display error message on the form
//                     document.getElementById('error-message').innerText = data.message;
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         });
//     };

//     // Handle sign-up form submission
//     handleFormSubmit('signup-form', '/api/users/signup');

//     // Handle login form submission
//     handleFormSubmit('login-form', '/api/users/login');
// });

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-li').value.trim();
    const password = document.querySelector('#password-li').value.trim();
  
    if (username && password) {
      try {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            // Redirect to the homepage
            window.location.href = '/';

            // Dynamically update the signup-login button text with user's first name
            const userResponse = await response.json();
            const welcomeButton = document.getElementById('signup-login-btn');
            if (welcomeButton) {
                welcomeButton.textContent = `Welcome ${userResponse.user.first_name}`;
            }
        } else {
            // Handle error response
            const data = await response.json();
            console.error('Error:', data.error_message || 'An error occurred during login');
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle unexpected errors
        console.error('An unexpected error occurred');
    }
}
};
  
const signupFormHandler = async (event) => {
  event.preventDefault();
  
  const first_name = document.querySelector('#first-name-su').value.trim();
  const last_name = document.querySelector('#last-name-su').value.trim();
  const username = document.querySelector('#username-su').value.trim();
  const email = document.querySelector('#email-su').value.trim();
  const password = document.querySelector('#password-su').value.trim();
  const confirmPassword = document.querySelector('#confirm-password-su').value.trim();

  // Check if passwords match
  if (password !== confirmPassword) {
    // Display error message
    document.getElementsByClassName('error')[0].innerText = 'Passwords do not match';
    return;
}
  
  if (first_name && last_name && username && email && password) {
    try {
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ first_name, last_name, username, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            // Redirect to the homepage
            window.location.href = '/';

            // Dynamically update the signup-login button text with user's first name
            const userResponse = await response.json();
            const welcomeButton = document.getElementById('signup-login-btn');
            if (welcomeButton) {
                welcomeButton.textContent = `Welcome ${userResponse.user.first_name}`;
            }
        } else {
            // Handle error response
            const data = await response.json();
            console.error('Error:', data.error_message || 'An error occurred during signup');
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle unexpected errors
        console.error('An unexpected error occurred');
    }
}
};
  
// Event listeners on the submit buttons of the signup and login forms that call their respective handler functions.
document.getElementById('submit-button-li').addEventListener('click', loginFormHandler);

document.getElementById('submit-button-su').addEventListener('click', signupFormHandler);

  



