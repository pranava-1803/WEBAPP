// Select the form element
const form = document.querySelector('form');

// Listen for the form's submit event
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // Validate form data
    if (email === '' || password === '') {
        alert('Please fill in all the fields.');
        return;
    }

    // Store data in localStorage
    const user = {
        email: email,
        password: password,
    };

    // Convert user data to JSON and save it to localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Confirmation message
    alert('Registration successful! Data has been saved.');

    // Optionally, redirect to the login page or another page
    window.location.href = 'login.html';
});
