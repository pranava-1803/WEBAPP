// Select the login form
const loginForm = document.querySelector('form');

// Listen for the form's submit event
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const email = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();

    // Retrieve the registered user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the user exists and credentials match
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        // Optionally, redirect to a dashboard or home page
        window.location.href = 'home.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
