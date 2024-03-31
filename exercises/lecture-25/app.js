/* ================ TASK 1 ================ */
// Маємо масив list
const list = ['html', 'css', 'javascript', 'react.js'];
// Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку.
const ul = document.createElement('ul');
list.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});
document.body.appendChild(ul);

/* ================ TASK 2 ================ */
// Маємо масив listWithHref
const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];
// Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref, де кожний елемент списку є тегом a з відповідним посиланням. Наприклад, для першого елемента списку:
//   <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>
// Додайте створений список на сторінку.
const ol = document.createElement('ol');
listWithHref.forEach((item) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = Object.values(item)[0];
  a.textContent = Object.keys(item)[0];
  li.appendChild(a);
  ol.appendChild(li);
});
document.body.appendChild(ol);

/* ================ TASK 3 ================ */
// Маємо масив students
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]
// Використовуючи метод createElement, створити таблицю на основі масиву students. Заголовки стовпчиків таблиці - firstName, lastName, degree. Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure; Додайте таблицю на сторінку.
let table = document.createElement('table');
table.innerHTML =   `<tr">
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>degree</th>
                    </tr>`;

students.forEach(student => {
    table.innerHTML += `<tr>
                            <td>${student.firstName}</td>
                            <td>${student.lastName}</td>
                            <td>${student.degree}</td>
                        </tr>`;
});
document.body.appendChild(table);
