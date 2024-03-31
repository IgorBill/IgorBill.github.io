/* ================ TASK 1 ================ */
// Функція calculate() приймає масив чисел як аргумент і повертає суму:
// function calculate(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//       sum = sum + number;
//     }
//     return sum;
// }
// calculate([1, 2, 4]); // => 7
   
// sum() - це функція, яка описує операцію додавання. 
function sum(n1, n2) {
    return n1 + n2;
}
   
// multiply() - це функція, яка описує операцію множення.
function multiply(n1, n2) {
    return n1 * n2;
}
// Зробити calculate() функцією вищого порядку, змусивши її підтримувати операцію додавання над масивом чисел та операцію множення над масивом чисел
// calculate(operation, initialValue, numbers) приймає перший аргумент - функцію, яка описує операцію, другий аргумент - початкове значення, третій аргумент - масив чисел.
// calculate(sum, 0, [1, 2, 4]); // => 7 calculate(multiply, 1, [1, 2, 4]); // => 8   
function calculate(operation, initialValue, numbers) {
    let res = initialValue;
    for (const number of numbers) {
        res = operation(res, number);
    }
    return res;
}
console.log(calculate(sum, 0, [1, 2, 4])); //7
console.log(calculate(multiply, 1, [1, 2, 4])); //8


/* ================ TASK 2 ================ */
// Маємо масив student_names
let student_names = ["Wick", "Malcolm", "Smith"];
// Застосувати до масиву student_names метод map, щоб отримати на консолі результат у такому вигляді:
// name: Wick | index: 0 | array: [ "Wick", "Malcolm", "Smith" ] 
// name: Malcolm | index: 1 | array: [ "Wick", "Malcolm", "Smith" ] 
// name: Smith | index: 2 | array: [ "Wick", "Malcolm", "Smith" ]
student_names.map((value, index, array) => {
    console.log(`name: ${value} | index: ${index} | array: [ "${array.join('", "')}" ] `);
});

/* ================ TASK 3 ================ */
// Маємо масив об'єктів students_information, що представляє результати іспитів кожного студента у полі degree:
let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];
// Максимальна оцінка degree = 600 Розрахувати відсоткове значення отриманої оцінки по кожному студенту, використовуючи метод map, та вивести на консоль отриманий результат у такому вигляді:
// { name: "Wick", degree: 375, percentage: 62.5 } { name: "Malcolm", degree: 405, percentage: 67.5 } { name: "Smith", degree: 453, percentage: 75.5 }​
degree = 600;
students_information.map((value) => {
    percentage = (value.degree / degree) * 100;
    console.log(`{ name: "${value.name}", degree: ${value.degree}, percentage: ${percentage} } `);
});


/* ================ TASK 4 ================ */
// Маємо масив :
const arr = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];
// Використовуючи метод reduce, звести масив до одномірного
// [ 1, 2, 3, 10, 11, 12, 21, 22, 23, 31, 32, 33, 34, 41, 42 ] 
const reduce = arr.reduce((final, current) => final.concat(current), []);
console.log(reduce); //[1, 2, 3, 10, 11, 12, 21, 22, 23, 31, 32, 33, 34, 41, 42]


/* ================ TASK 5 ================ */
// Створити конструктор прототипу масиву upperCase(), що перетворює символи рядка у символи верхнього регістру.
Array.prototype.upperCase = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase(); 
    }
};

function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}
myFunc(); // ['ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML']
