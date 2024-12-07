
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Name validation
    if (name.length === 0 || name.length > 40) {
        alert('Name must be between 1 and 40 characters.');
        return false;
    }

    // Phone number validation
    if (!/^[0-9]{1,15}$/.test(phone)) {
        alert('Phone number must be numeric and up to 15 digits.');
        return false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be 8-16 characters long, include at least 1 uppercase letter, 1 lowercase letter, and 1 number, and contain no symbols.');
        return false;
    }

    alert('Registration Successful');
    document.getElementById("registrationForm").reset();
}
