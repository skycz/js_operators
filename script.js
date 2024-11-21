"use strict";

// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "")
/* promt дефолт значение string (строчный тип)
+prompt преобразовывает это значение в числовое */
// console.log(answer + 5);

/* const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Какая ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof(answers));
console.log(typeof(answers)); */

// Интерполяция ES6

/* const category = 'toys'; */

/* console.log(`https://someurl.com/toys${category}/5`);  */
/* косые ковычки для вложенности ${category}/5 */

/* const user = 'Tamerlan';
alert(`Привет, ${user}`); */
/* косые ковычки для вложенности ${user} */

/* Операторы в JS */
/* console.log('arr' + " - object");
console.log('4' + " - object"); */

/* числовой оператор */
/* console.log(4 + + "5");  */

/* оператор инкримента */
/* let incr = 10,
    decr = 10; */

/* incr++;
console.log(incr); */
/* оператор дикримента */
/* decr--;
console.log(decr); */

/* оператор процентов  */
/* console.log(5%2); */

/* оператор равенства */
/* console.log(2*4 == '8'); */
/* оператор строго равенства */
/* console.log(2 + 2 * 2 !== '6'); */ 

/* логические операторы */

/* && */ /* оператор И */
/* || */ /* оператор ИЛИ */

/* const isChecked = true, 
    isClose = false; */

/* для оператора "ИЛИ ||" достаточно одной правды  */
/* console.log(isChecked || isClose); */


/* для оператора "И &&" нужно столько правды, сколько указано классов */
/* console.log(isChecked && isClose); */

/* оператор отрицания */
/* !-Обращает правду в ложь, ложь в - правду */

/* const isChecked = true,
    isClose = false;

console.log(isChecked || !isClose); */

// оператор Spread
/* 
let a = 5, 
    b = a;

b = b + 5; // 5 + 5 = 10 тк b = a;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
}; */

/* const copy = obj; // Cсылка на obj

copy.a = 10;

console.log(copy);
console.log(obj); */ // результат у обоих свойств a, b будет одинаковый
// так как мы не создаем копию предыдущего объекта, а лишь меняем его по ссылке obj

// Создание копии объекта (obj)

function copy(mainObj) {
    let objCopy = {};
    
    let key; // переменную let можно создать вне
    for (key in mainObj) {
        objCopy[key] = mainObj[key] // копирует старый объект в новый
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10; // Поверхностная копия
newNumbers.c.x = 10; // Глубокая копия

/* console.log(newNumbers);
console.log(numbers); */

// Метод Obj.assign
// Метод Object.assign() позволяет копировать все перечисляемые собственные свойства (ключи и значения) из одного или нескольких исходных объектов в целевой объект. Он возвращает целевой объект, изменяя его.

const add = {
    d: 17,
    e: 20
};

// Копируем свойства из объекта add в объект numbers
/* console.log(Object.assign(numbers, add)); */

// Пример с пустым объектом 

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add); // Метод Object.assign() создает поверхностную копию

clone.d = 20; // Примитивные значения(такие как числа и строки) копируются по значению, изменения в clone не затрагивают add.

/* console.log(add);
console.log(clone); */

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // .slice Создает копию массива
newArray[1] = 'aasdadsa'; // Меняем второй элемент по индексу 
/* console.log(newArray);
console.log(oldArray);
 */

// Стандарты ES6, ES8
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    //Оператор расширения (...) — это синтаксис, который позволяет "распаковывать" элементы массива или объекта
    internet = [...video, ...blogs, 'vk', 'facebook'];
// массив internet, который включает все элементы из video и blogs, а также два новых значения — 'vk' и 'facebook'
/* console.log(internet); */

// Второй пример

function log(a, b, c) {
   /*  console.log(a);
    console.log(b);
    console.log(c); */
}

const num = [2, 5, 7];

/* log(...num); */ // Запускаем консоль

// Третий пример

const array = ["a", "b"];

const newAarray = [...array]; // копия массива array через ...
console.log (newAarray);
console.log (Array);

const q = {
    one: 1,
    two: 2
};

const newObj = { ...q };  // копия объекта q через ...