/* ================ TASK 1 ================ */
// Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір. 
//Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.
let h1 = document.getElementsByTagName('h1');
console.log(`Type: ${typeof(h1)}, Length: ${h1.length}`);
for(const el of h1) {
    console.log(el);
}

/* ================ TASK 2 ================ */
// Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. 
//Встановити для нього стиль background-color = "gold"
let p1 = document.querySelector('#p1');
p1.style.backgroundColor = 'gold';

/* ================ TASK 3 ================ */
// Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. 
//Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;
let p2 = document.querySelector('#p2');
p2.style.cssText = 'background-color:gold; color: blue; font-size: 2rem;';

/* ================ TASK 4 ================ */
// Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. 
//Призначити для нього клас third
let p3 = document.querySelector('#p3');
p3.className = 'third';

/* ================ TASK 5 ================ */
// Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. 
//Призначити для нього класи fourth та border
let p4 = document.querySelector('#p4');
p4.classList.add('fourth', 'border');

/* ================ TASK 6 ================ */
// Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.
let containers = document.querySelectorAll('.container');
for (const container of containers) {
    let firstElement = container.firstElementChild;
    console.log(firstElement);
}

/* ================ TASK 7 ================ */
// Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.
for (const container of containers) {
    let firstTextContent = container.firstElementChild.textContent;
    console.log(firstTextContent);
}

/* ================ TASK 8 ================ */
// 8.1 Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers. 
//Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином:
// перший залишити h1
// другий замінити на h2
// третій замінити на h3
// четвертий замінити на h4 зберегти початкові атрибути id та class
let headers = document.querySelectorAll('.container header');
const classes = ['first', 'second', 'third', 'fourth'];

for (let i = 0; i < headers.length; i++) {
    let cName = headers[i].firstElementChild.classList;
    let idName = headers[i].firstElementChild.id;
    let innerText = headers[i].firstElementChild.innerText;

    if (i !== 0) {
        headers[i].innerHTML = `<h${i+1} class='${cName}' id='${idName}'>${innerText}</h${i+1}>`;        
    }

    // 8.2 Використовуючи цикл for для колекції headers та масив classes, додати до отриманих тегів-заголовків класи таким чином
    // до h1 додати клас first
    // до h2 додати клас second
    // до h3 додати клас third
    // до h4 додати клас fourth
    headers[i].firstElementChild.classList.add(classes[i]);
    console.log(headers[i]);
}
