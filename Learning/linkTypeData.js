"use strict";


const obj = {
    a: 10,
    b: 15
};

const copy = obj;  //создаётся ссылочная копия

copy.a = 5;    //значение передастя в основной объект через ссылкочную копию
//Так происходит с объектами(функции,массивы)
console.log(copy);
console.log(obj);
//Вывёд: значение поменяетыя в обеих переменных

//Так как не можно таким способом создать копию объекта, то мы создаём такой алгоритм при помощи фунции:

function objCopy(mainObj){
    let copyObj = {};

    let key;
    for (key in mainObj){
    copyObj[key] = mainObj[key];
}
    return copyObj;
}
//Функция создаёт клон


const numbers = {
    a:20,
    b:30,
    c:{
        x:40,
        z:50
    }
};
//новый объект


// const copyNumbers = objCopy(numbers);  //клонируем объект. 
//это поверхстная копия, и вложенные в данные типа c:  не будут изменятся

// numbers.a = 50;
// numbers.c.x = 60;
//записываем новые данные в объект
// console.log(numbers);
// console.log(copyNumbers);
//в объекте значение изменится,а в клоне нет


const add = {
    d:11,
    e:12
};


// Object.assign(numbers, add);   
//Добавляет свойства одного обэкта к другому. Синтаксис: Object.assign("объект куда помещаем", "какой объект помещаем")

const clone = Object.assign({}, add);
//таким образом можно создать клона и объекта
add.d = 13;

console.log(add);
console.log(clone);
/////////////////////////////////////////////////
//Клонирование массивов:

const oldArray = ['a', 'b', 'c', 'd'];
const newArray = oldArray.slice();

oldArray[2] = 'hrsho';
console.log(oldArray);
console.log(newArray);
//////////////////////////////////////////////////

//оператор "..." spread operator разворачивает значения массивов и объектов

const video = ['YT', 'VMEO', 'RUTB'],
      social =['VK','FB', 'OK'],
      internet = [...video, ...social];

console.log(internet);


function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [1, 2 ,3];

log(...num);

//клонируем массивы

const Aarray = ['a', 'b'];

const copyAarray = [...Aarray];

//клонируем объект

const q = {
    one: 1,
    two: 2
};

const cloneObj = {...q};

console.log(cloneObj);