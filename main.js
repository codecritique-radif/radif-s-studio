// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust the offset as needed
                behavior: 'smooth'
            });
        }
    });
});

// User Login
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Basic authentication check (replace with your authentication logic)
    if (username === 'demo' && password === 'password') {
        // Successful login
        loginMessage.innerText = 'Login successful';
        loginMessage.style.color = 'green';
        // You can add code here to redirect the user to a dashboard or another page.
    } else {
        // Failed login
        loginMessage.innerText = 'Login failed. Please check your credentials.';
        loginMessage.style.color = 'red';
    }

    // Clear input fields
    usernameInput.value = '';
    passwordInput.value = '';
});