/* ================ TASK 1 ================ */
// Маємо код
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
// Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.
console.log(str1.length); //13
console.log(str2.length); //13
console.log(str1==str2); //true
console.log(str1===str2); //true

/* ================ TASK 2 ================ */
// Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.
let string5 = 'Hello World';
console.log(string5[0]); //H
console.log(string5.charAt(0)); //H

/* ================ TASK 3 ================ */
// повернути символ J рядка str3:
let str3 = "Hello Javascript";
console.log(str3.charAt(6)); //J

/* ================ TASK 4 ================ */
// Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
console.log(str3[str3.length-1]); //t
console.log(str3.charAt(str3.length-1)); //t

/* ================ TASK 5 ================ */
// Напишіть три варіанти функції lastChar, що повертає останній символ рядка
function lastChar1() {
    return str3[str3.length-1];
}
console.log(lastChar1()); //t

function lastChar2() {
    return str3.charAt(str3.length-1);
}
console.log(lastChar2()); //t

function lastChar3() {
    return str3.slice(-1);
}
console.log(lastChar3()); //t

/* ================ TASK 6 ================ */
// Маємо код
let a = 'When candles are out,';
let b = 'all cats are grey.';
// Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey
console.log(a.concat(" " + b)); //When candles are out, all cats are grey

/* ================ TASK 7 ================ */
// Маємо код
let fact = "Fifteen is the same as"
let a1 = 5;
let b1 = 10;
// Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15
fact = fact + " " + (a1 + b1);
console.log(fact); //Fifteen is the same as 15

/* ================ TASK 8 ================ */
// Маємо код
let firstName = "Tom";
let lastName = "Cat";
// Напишіть функцію getFullName, що повертає результат: "Tom Cat"
function getFullName (firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName(firstName, lastName)); //Tom Cat

/* ================ TASK 9 ================ */
// Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!
function greeting() {
    let fullName = getFullName(firstName, lastName);
    return "Hello, " + fullName +"!"
}
console.log(greeting()); //Hello, Tom Cat!

/* ================ TASK 10 ================ */
// Використовуючи функцію greeting, створити такий шаблон:
//<div><h1>Hello, Tom Cat!</h1></div>
let html = `<div><h1>${greeting()}</h1></div>`;
console.log(html); //<div><h1>Hello, Tom Cat!</h1></div>

/* ================ TASK 11 ================ */
// Маємо наступний код:
let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
// "The name of our game"
console.log(string1.trim());
// "The name of our game  "
console.log(string1.trimStart());
// "  The name of our game"
console.log(string1.trimEnd());

const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
console.log(phoneNumber.trim());
// => '555-123 \n'
console.log(phoneNumber.trimStart());

/* ================ TASK 12 ================ */
// Маємо наступний код:
let sentence1 = 'Always look on the bright side of life';
// Перевірити, чи містить рядок значення 'look up'
console.log(sentence1.includes("look up")); //false
// Перевірити, чи містить рядок значення 'look on'
console.log(sentence1.includes("look on")); //true
// Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції
console.log(sentence1.includes("look on", 8)); //false

/* ================ TASK 13 ================ */
// Маємо наступний код:
let sentence2 = 'Always look on the bright side of life';
// Знайти індекс символу 'l'
console.log(sentence2.indexOf('l')); //1
// Знайти індекс символу 'l', починаючи з 3-ї позиції
console.log(sentence2.indexOf('l', 3)); //7
// Знайти індекс символу 'L'
console.log(sentence2.indexOf('L')); //-1 (відсутній)

/* ================ TASK 14 ================ */
// Маємо наступний код:
let sentence3 = 'Always look on the bright side of life';
// Отримати підрядок 'look on the bright side of life'
console.log(sentence3.substring(7)); //look on the bright side of life
// Отримати підрядок 'Always'
console.log(sentence3.substring(0 , 6)); //Always
// Отримати підрядок 'look'
console.log(sentence3.substring(7 , 11)); //look

/* ================ TASK 15 ================ */
// Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.
let login = /^[a-z0-9-_]{8,16}$/;

/* ================ TASK 16 ================ */
// Створити регулярний вираз, який призначений для перевірки email на коректність.
let email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

/* ================ TASK 17 ================ */
// Маємо наступний код:
let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
function truncateText1(txt) {
    return txt.substring(0, 50);
}
console.log(truncateText1(sentence)); //Lorem ipsum dolor sit amet, consectetur adipiscing

// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr
function truncateText2(txt) {
    return txt.substr(0, 50);
}
console.log(truncateText2(sentence)); //Lorem ipsum dolor sit amet, consectetur adipiscing