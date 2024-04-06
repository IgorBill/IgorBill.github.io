const registrationForm = document.getElementById('registrationForm');

//Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення про помилку. Повідомлення про помилки відображаються в розділі errorMessages.
const errorMessages = document.getElementById('errorMessages');
function displayError(message) {
    errorMessages.innerHTML += `<div class="error" style="color:red">${message}</div>`;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(pass) {
    return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/.test(pass);
}

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля.
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    errorMessages.innerHTML = "";

    // ім’я користувача не може бути пустим
    if (!username.value.trim()) {
        displayError('Ім’я користувача не може бути пустим.'); 
        return;       
    }

    // електронна адреса має бути у правильному форматі
    if (!email.value.trim() || !isValidEmail(email.value)) {
        displayError('Електронна адреса має бути у правильному форматі.')
        return;
    }

    // пароль має містити принаймні 8 символів
    if(password.value.length < 8) {
        displayError('Пароль має містити принаймні 8 символів.');
        return;
        // пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.
    } else if (!isValidPassword(password.value)) {
        displayError('Пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.');
        return;
    }

    registrationForm.submit();
    alert('Реєстраці пройшла успішно');

    // після успішної реєстрації потрібно скинути значення полів форми.
    registrationForm.reset();

});
