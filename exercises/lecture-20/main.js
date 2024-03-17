/* ================ TASK 1 ================ */
// Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль
let person = {
    name: "Ihor",
    age: 38
}
console.log(person.name, person.age); //Ihor 38

/* ================ TASK 2 ================ */
// Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.
person.name = {
    firstName: "Ihor",
    lastName: "Bilenko"
}
console.log(person.name.firstName, person.name.lastName, person.age); //Ihor Bilenko 38

/* ================ TASK 3 ================ */
// Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.
person.bio = () => {
    return person.name.firstName + " " + person.name.lastName + " " + person.age;
}
console.log(person.bio()); //Ihor Bilenko 38

/* ================ TASK 4 ================ */
// Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.
person.introduceSelf = () => {
    return `Hi! I'm ${person.name.firstName}`;
}
console.log(person.introduceSelf()); //Hi! I'm Ihor

/* ================ TASK 5 ================ */
// Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою createPerson 2 екземпляри об'єкта.
function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function() {
        return `Hi! I'm ${obj.name}`; 
    }
    return obj;
}
const person1 = createPerson("Jack");
const person2 = createPerson("John");
console.log(person1.introduceSelf()); //Hi! I'm Jack
console.log(person2.introduceSelf()); //Hi! I'm John

/* ================ TASK 6 ================ */
// Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри об'єкта mary та tom.
function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        return `Hi! I'm ${this.name}`;
    }
}
const mary = new Person("Mary");
const tom = new Person("Tom");
console.log(mary.introduceSelf()); //Hi! I'm Mary
console.log(tom.introduceSelf()); //Hi! I'm Tom

/* ================ TASK 7 ================ */
// Брудний мартіні – ідеальний коктейль для любителів оливкового. Його можна приготувати на горілці чи джині за таким рецептом.
// Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french()
const DirtyMartini = {
    english_please() {
        return `
                ingredients:
                    6 fluid ounces gin
                    1 dash dry vermouth (0.0351951ml) 
                    1 fluid ounce brine from olive jar
                    4 stuffed green olives
                `
    },
    excuse_my_french() {
        return `
                ingrédients:  
                    170.4786 ml de gin
                    1 trait de vermouth sec (0.0351951ml) 
                    28.4131 ml de saumure du pot d'olive
                    4 olives vertes farcies
                `
    }
}
console.log(DirtyMartini.english_please());
console.log(DirtyMartini.excuse_my_french());