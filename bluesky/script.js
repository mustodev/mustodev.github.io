document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetch('https://www.iwishkem.tk/bluesky/data.json') // Replace with your JSON URL
        .then(response => response.json())
        .then(data => {
            var foundUser = data.users.find(user => user.username === username && user.password === password);
            if (foundUser) {
                // Redirect or perform action for successful login
                window.location.href = 'success.html';
            } else {
                // Display error message
                document.getElementById('error').innerText = 'Invalid username or password.';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
