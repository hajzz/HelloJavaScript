'use strict';


const str = "test";
const arr = [1, 2, 3];

console.log(str[3]);   //Выведется 4я буква из слова test, так как вызываем массив. 

console.log(str.length);     //Свойство. Выдаёет колво символов
console.log(str.toUpperCase()); //Метод. Должен замыкатся круглыми скобками. Не изменяет саму переменную.
console.log(str);

const hair = "some hair";
console.log(hair.indexOf('h')); //Выведется 5, так как H - 5я буква.

const lol = "lol kek";
console.log(lol.slice(4,7)); //вырезаем строку от 4ой буквы до 7й не включая
console.log(lol.substring(4,7));  //тоже самое, только не принимает отрицательные значения. start может быть больше чем end
console.log(lol.substr(4,3)); // вырезаем строчку в колве символов -3. от 4й строчки.