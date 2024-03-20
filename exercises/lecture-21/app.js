// Маємо рядок fruits:
const fruits = 'apple banana cantaloupe blueberries grapefruit';

/* ================ TASK 1 ================ */
// Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
let fruitsArr = fruits.split(" ");
console.log(fruitsArr);

/* ================ TASK 2 ================ */
console.log('---------------TASK 2------------------');

// Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
for (let i = 0; i < fruitsArr.length; i++) {
    console.log(fruitsArr[i]);
}

/* ================ TASK 3 ================ */
console.log('---------------TASK 3------------------');

// Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
let n = 0;
while (n < fruitsArr.length) {
    console.log(fruitsArr[n]);
    n++;
}

/* ================ TASK 4 ================ */
console.log('---------------TASK 4------------------');

// Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
let i = 0;
do {
    console.log(fruitsArr[i]);
    i++;
} while (i < fruitsArr.length);

/* ================ TASK 5 ================ */
console.log('---------------TASK 5------------------');

// Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.
for (const fruit of fruitsArr) {
    console.log(fruit);
}

/* ================ TASK 6 ================ */
console.log('---------------TASK 6------------------');

// Маємо масив Numbs.
const Numbs = [1,2,3,4,5,6,7,8,9,10];
// Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.
for (let i = 0; i <= Numbs.length; i++) {
    if (Numbs[i] % 2 == 0) {
        console.log(Numbs[i]);
    }
}

/* ================ TASK 7 ================ */
console.log('---------------TASK 7------------------');

// Маємо масив names:
const names7 = ['Batman'];
// Додати 'Joker' в кінець масиву names:
names7.push('Joker');
console.log(names7); // ['Batman', 'Joker']

/* ================ TASK 8 ================ */
console.log('---------------TASK 8------------------');

// Маємо масив names:
const names8 = ['Batman'];
// Додати 'Joker' на початок масиву names
names8.unshift('Joker');
console.log(names8); // ['Joker', 'Batman']

/* ================ TASK 9 ================ */
console.log('---------------TASK 9------------------');

// Маємо масив names:
names9 = ['Batman', 'Joker', 'Bane'];
// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
names9.unshift('Catwoman');
console.log(names9); // ['Catwoman', 'Batman', 'Joker', 'Bane']

/* ================ TASK 10 ================ */
console.log('---------------TASK 10------------------');

// Маємо масив names:
names10 = ['Batman', 'Joker', 'Bane'];
//Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
names10 = ['Catwoman', ...names10];
console.log(names10); // ['Catwoman', 'Batman', 'Joker', 'Bane']

/* ================ TASK 11 ================ */
console.log('---------------TASK 11------------------');

// Маємо масив names
names11 = ['Batman', 'Joker', 'Bane'];
// Додати до names елемент 'Catwoman', розмістивши його з індексом 1
names11.splice(1, 0, 'Catwoman');
console.log(names11); // ['Batman', 'Catwoman', 'Joker', 'Bane']

/* ================ TASK 12 ================ */
console.log('---------------TASK 12------------------');

// Маємо масив names
const names12 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Видалити елементи 'Catwoman' і 'Joker' з масиву names:
names12.splice(1, 2);
console.log(names12); // ['Batman', 'Bane']

/* ================ TASK 13 ================ */
console.log('---------------TASK 13------------------');

// Маємо масив names
const names13 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
names13.splice(1, 2, 'Alfred');
console.log(names13); // ['Batman', 'Alfred', 'Bane']

/* ================ TASK 14 ================ */
console.log('---------------TASK 14------------------');

// Маємо масив names
const names14 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.
if (!names14.includes('Alfred')) {
    names14.push('Alfred');
}
console.log(names14); // ['Batman', 'Catwoman', 'Joker', 'Bane', 'Alfred']

/* ================ TASK 15 ================ */
console.log('---------------TASK 15------------------');

// Маємо масив names
const names15 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.
if (names15.includes('Alfred')) {
    names15.splice(names15.indexOf('Alfred'), 1);
}
console.log(names15); // ['Batman', 'Catwoman', 'Joker', 'Bane']
