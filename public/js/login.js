// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   // Collect values from the login form
//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (email && password) {
//     // Send a POST request to the API endpoint
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       // If successful, redirect the browser to the profile page
//       document.location.replace('/profile');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// const signupFormHandler = async (event) => {
//   event.preventDefault();

// //   const name = document.querySelector('#name-signup').value.trim();
// //   const email = document.querySelector('#email-signup').value.trim();
// //   const password = document.querySelector('#password-signup').value.trim();

// //   if (name && email && password) {
// //     const response = await fetch('/api/users', {
// //       method: 'POST',
// //       body: JSON.stringify({ name, email, password }),
// //       headers: { 'Content-Type': 'application/json' },
// //     });

// //     if (response.ok) {
// //       document.location.replace('/profile');
// //     } else {
// //       alert(response.statusText);
// //     }
// //   }
// // };

// // document
// //   .querySelector('.login-form')
// //   .addEventListener('submit', loginFormHandler);

// // document
// //   .querySelector('.signup-form')
// //   .addEventListener('submit', signupFormHandler);
// Signup Form Handler
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#first_name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const confirmPassword = document.querySelector('#comfirm-password').value.trim();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    if (firstName && lastName && username && email && password) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ first_name: firstName, last_name: lastName, username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert("Failed to sign up. Please check your inputs.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };
  
  document
    .querySelector('.form-detail')
    .addEventListener('submit', signupFormHandler);
