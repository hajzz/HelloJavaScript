"use strict"


let arr = [1, 4, 5, 10, 3];


// arr[11] = 105;             
// console.log(arr.length);
// свойство .lenght в массивах работает по принципу последний индекс +1 = колво индексов

// arr.pop();
// удаляет последний индекс
// arr.push(14);
// добавляет индекс в конец массива
// console.log(arr);

// arr.forEach(function(value, index, array){
//     метод .forEach содержит в себе функцию которая имеет 3 callbacka'a = значение/индекс/массив
//     console.log(`в массиве  ${array} содержистя значение ${value}  под номером ${index}`);
// });

//метод использутся чаще чем for...of, но плюс его состоит в том что можно использовать break/continue

const str = prompt('type in values separated by comma','');
const inputValues = str.split(', ');
//metod .split создаёт массив, в параметрах указываем разделитель
inputValues.sort();
console.log(inputValues.join('; '));
//метод .join конвертирует массив в строку. В параметрах указываем каким знаком будем разделять
