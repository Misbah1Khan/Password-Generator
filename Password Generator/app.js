
function passwordGenerator() {
    const passLen = document.getElementById('passLen').value;
    const upperCase = document.getElementById('UpperCase').checked;
    const lowerCase = document.getElementById('LowerCase').checked;
    const includeNumber = document.getElementById('Number').checked;
    const includeSpecial = document.getElementById('Special').checked;

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let validChars = '';

    if (upperCase) validChars += upperCaseChars;
    if (lowerCase) validChars += lowerCaseChars;
    if (includeNumber) validChars += numberChars;
    if (includeSpecial) validChars += specialChars;

    let password = '';

    for (let i = 0; i < passLen; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars.charAt(randomIndex);
    }

    document.getElementById('password').value = password;
}

function copyPass() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}