const loginButton = document.getElementById('loginButton');
const messageDiv = document.getElementById('message');

const checkLoginStatus = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        loginButton.textContent = 'Logout';
        loginButton.addEventListener('click', () => {
            localStorage.removeItem('authToken');
            messageDiv.textContent = 'Logged out successfully.';
            setTimeout(() => {
                location.reload(); 
            }, 1500);
        });
    } else {
        loginButton.textContent = 'Log In';
    }
};

loginButton.addEventListener('click', async () => {
    if (loginButton.textContent === 'Logout') return; 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        messageDiv.textContent = "Please enter both username and password.";
        return;
    }

    messageDiv.textContent = "Logging in...";
    try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('authToken', data.token);
            messageDiv.textContent = "Login successful! Redirecting to the homepage...";
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 3000);
        } else {
            messageDiv.textContent = "Login failed. Please check your credentials.";
        }
    } catch (error) {
        messageDiv.textContent = "An error occurred. Please try again later.";
        console.error(error);
    }
});

checkLoginStatus();
