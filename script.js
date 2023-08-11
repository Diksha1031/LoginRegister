document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add login validation and processing logic here
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const registerUsername = document.getElementById('registerUsername').value;
        const registerPassword = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Check if passwords match
        if (registerPassword !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Add registration validation and processing logic here
    });
});
