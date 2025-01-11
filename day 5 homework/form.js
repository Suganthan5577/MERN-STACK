function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function validateLogin() {
    let isValid = true;

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    document.getElementById('loginEmailError').innerText = '';
    document.getElementById('loginPasswordError').innerText = '';

    if (!email) {
        document.getElementById('loginEmailError').innerText = 'Email is required.';
        isValid = false;
    }

    if (!password) {
        document.getElementById('loginPasswordError').innerText = 'Password is required.';
        isValid = false;
    }

    return isValid;
}

function validateRegister() {
    let isValid = true;

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    document.getElementById('registerNameError').innerText = '';
    document.getElementById('registerEmailError').innerText = '';
    document.getElementById('registerPasswordError').innerText = '';

    if (!name) {
        document.getElementById('registerNameError').innerText = 'Name is required.';
        isValid = false;
    }

    if (!email) {
        document.getElementById('registerEmailError').innerText = 'Email is required.';
        isValid = false;
    }

    if (!password) {
        document.getElementById('registerPasswordError').innerText = 'Password is required.';
        isValid = false;
    }

    return isValid;
}