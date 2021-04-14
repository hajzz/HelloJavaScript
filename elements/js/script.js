"use strict";

const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
//тут обязательно точка потому что это класс. Метод не знает что мы ищем класс
const oneHeart = document.querySelector('div');
const wrapper = document.querySelector('.wrapper');

//Дополнительное обращение к родителям при помощи переменных
const wrapperHearts = wrapper.querySelector('.hearts');


//-----------------------------------------------------------

// box.style.backgroundColor = 'blue';
// box.style.width = '300px';

// Alternative; написание нескольких свойст в 1 строке. на языке  CSS. 
box.style.cssText = 'background-color: blue; width: 800px';

buttons[2].style.borderRadius = '100%';
hearts.forEach(item => {
    item.style.color  = 'black';
});
console.log(hearts[1]);

//----------------------------------------------------
// // изменение нескольких елементов при помощи цикла

// for (let i = 0; i <= hearts.length; i++){
//     hearts[i].style.backgroundColor = 'black';
// }

// //изменение нескольких елементов при помощи цикла - 2
// hearts.forEach(item => {
//     item.style.backgroundColor = 'black';
// });

//-----------------------------------
// создаём елменты при помощи JS

const div = document.createElement('div');
//он создаёется только внутри JSа
div.classList.add('black');
//создаём класс black 

const div2 = document.createElement('div2');
div2.classList.add('white');

// const text = document.createTextNode('hrsho'); 
//по другому НОДЫ
//----------------------------
//Добавление HTML элементов

// document.body.append(div);
//обращаемся к элементу body и добавляме класс div

// document.querySelector('.wrapper').append(div);  //вынесен в переменную ниже
//Queryselector `метод выбирает класс, append добавляет div

wrapper.append(div); //добавление в начало 
wrapper.prepend(div2);//добавление в конец

hearts[0].before(div2);  //переместить класс после 
hearts[0].after(div);    //переместить класс в начало

// circles[0].remove();  //удаление

hearts[1].replaceWith(circles[1]);

//--------------------------------------------------
//Добавление текста в элементы

//как HTML код, так и тесктовый можно
// div.innerHTML = '<h1>hello world</h1>';

//Только текст
// div.textContent = 'Hello World';

///Добавление текста в сам документ
div.insertAdjacentHTML('beforebegin', '<h2>Перед началом</h2>');
//До начала элемента  

div.insertAdjacentHTML('afterbegin', '<h2>после начала</h2>');
//после начала элемента

div.insertAdjacentHTML('beforeend', '<h2>Перед концом</h2>');
//Перед концом элемента

div.insertAdjacentHTML('afterend', '<h2>после концa</h2>');
//после концa элемента