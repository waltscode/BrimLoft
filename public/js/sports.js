
document.addEventListener('DOMContentLoaded', function () {
    // Get the sports list and the accordion element
    const sportsList = document.querySelector('.sports');
    const accordion = sportsList.querySelector('.accordion');

    // Hide the accordion initially
    accordion.style.display = 'none';

    // Show/hide the accordion on hover
    sportsList.addEventListener('mouseenter', function () {
        accordion.style.display = 'block';
    });

    sportsList.addEventListener('mouseleave', function () {
        accordion.style.display = 'none';
    });

    // Fetch league_id and log it to the console
    fetch('/api/leagues/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));
});

  
