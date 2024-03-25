const alert = document.querySelector('.alert');

/* ================ TASK 1 ================ */
// Знайти на сторінці кнопку з класом btn-primary. Призначте знайденому елементу подію onclick. Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple primary alert—check it out!".
const btnPrimary = document.querySelector('.btn-primary');
btnPrimary.onclick = function() {
    alert.classList.add('alert-primary');
    alert.textContent = 'A simple primary alert—check it out!';
}

/* ================ TASK 2 ================ */
// Знайти на сторінці кнопку з класом btn-secondary. Додати до кнопки прослуховувач події "click". Написати функцію обробки події click, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"
const btnSecondary = document.querySelector('.btn-secondary');
btnSecondary.addEventListener('click', () => {
    alert.classList.add('alert-primary');
    alert.textContent = 'A simple secondary alert—check it out!';
});

/* ================ TASK 3 ================ */
// Знайти на сторінці кнопку з класом btn-success. Додати до кнопки прослуховувач події "mouseover". Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!"
// Додати до кнопки прослуховувач події "mouseout". Написати функцію обробки події mouseout, що видаляє CSS-клас alert-success з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.
const btnSuccess = document.querySelector('.btn-success');
btnSuccess.addEventListener('mouseover', () => {
    alert.classList.add('alert-success');
    alert.textContent = 'A simple success alert—check it out!';
});
btnSuccess.addEventListener('mouseout', () => {
    alert.classList.remove('alert-success');
    alert.textContent = '';
});

/* ================ TASK 4 ================ */
// Знайти на сторінці кнопку з класом btn-danger. Додати до кнопки прослуховувач події "focus". Написати функцію обробки події focus, що додає CSS-клас alert-danger до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple danger alert—check it out!" 
//Додати до кнопки прослуховувач події "focusout". Написати функцію обробки події focusout, що видаляє CSS-клас alert-danger з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.
const btnDanger = document.querySelector('.btn-danger');
btnDanger.addEventListener('focus', () => {
    alert.classList.add('alert-danger');
    alert.textContent = 'A simple danger alert—check it out!';
});
btnSuccess.addEventListener('focusout', () => {
    alert.classList.remove('alert-danger');
    alert.textContent = '';
});

/* ================ TASK 5 ================ */
// Знайти на сторінці кнопки з класом btn-dark та btn-light. Написати функцію toggleMode, що перемикає клас «dark-mode» елемента document.body за допомогою методу classList.toggle(). Одночасно при перемиканні класу dark-mode потрібно приховувати або показувати відповідну кнопку. Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати кнопку dark-mode, і навпаки, якщо вимкнено режим dark-mode, показати кнопку btn-dark та сховати кнопку btn-light
const btnDark = document.querySelector('.btn-dark');
const btnLight = document.querySelector('.btn-light');

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        btnLight.classList.remove('hide');
        btnDark.classList.add('hide');
    } else {
        btnLight.classList.add('hide');
        btnDark.classList.remove('hide');
    }
}

btnDark.addEventListener('click', toggleMode);
btnLight.addEventListener('click', toggleMode);

/* ================ TASK 6 ================ */
// Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress". Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter". Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault(). Після скасування дії за замовчуванням, додати CSS-клас alert-info до елемента з id = alert та змінити значення властивості textContent цього елемента на "A simple info alert—check it out!";
const btnInfo = document.querySelector('.btn-info');
btnInfo.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        alert.classList.add('alert-info');
        alert.textContent = 'A simple info alert—check it out!';
    }
});

/* ================ TASK 7 ================ */
// Знайти на сторінці всі селектори .card. Використовуючи цмкл for, вивести на консоль вміст кожного елемента з класом .card-title
const cards = document.querySelectorAll('.card');
for (let card of cards) {
    let cardTitle = card.querySelector('.card-title').innerText;
    console.log(cardTitle);
}

/* ================ TASK 8 ================ */
// Знайти на сторінці всі селектори .card. Використовуючи цикл for, знайти для кожного елемента .card кнопку з класом .add-to-cart, додати для кожної кнопки обробник події click, що викликає функцію, яка виводить на консоль вміст кожного елемента з класом .card-title
for (let card of cards) {
    let addToCard = card.querySelector('.add-to-cart');
    addToCard.addEventListener('click', () => {
        let cardTitle = card.querySelector('.card-title').innerText;
        console.log(cardTitle);
    });
}