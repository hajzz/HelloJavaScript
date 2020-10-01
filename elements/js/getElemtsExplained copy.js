'use strict';

const box = document.getElementById('box');
//получаем сам элемент по айдишнику
console.log(box);

const buttons = document.getElementsByTagName('button');
//получаем псевдомассив елементов
console.log(buttons[2]);
//получаем кнопку под индексом 2  / так же можно использовать в самом выражении ('button')[2];
//!!ВАЖНО. При обращении к массиву ничего поменять нельзя. Только если обратиться напрямую к кнопке, нп [2]

const circles = document.getElementsByClassName('circle');
//получаем елементы вместе с классами [div.circle, div.circle, div.circle]
console.log(circles);

//Современных метод вывода елементов

const hearts = document.querySelectorAll('.heart'); 
//тут обязательно точка потому что это класс. Метод не знает что мы ищем класс
hearts.forEach(item =>{
    console.log(item);
});

const oneHeart = document.querySelector('div');
//метод выведет только ПЕРВЫЙ попавшийся елемент или класс и тп.
console.log(oneHeart);