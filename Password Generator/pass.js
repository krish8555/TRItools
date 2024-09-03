function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = '';

    if (includeUppercase) characterPool += uppercase;
    if (includeLowercase) characterPool += lowercase;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }

    document.getElementById('password').value = password;
    updateStrength(password);
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

function updateStrength(password) {
    const strengthElement = document.getElementById('strength');
    if (password.length > 12) {
        strengthElement.innerText = 'Very strong';
        strengthElement.style.color = 'green';
    } else if (password.length > 8) {
        strengthElement.innerText = 'Strong';
        strengthElement.style.color = 'orange';
    } else {
        strengthElement.innerText = 'Weak';
        strengthElement.style.color = 'red';
    }
}
