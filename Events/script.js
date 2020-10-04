"use strict";

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      link = document.querySelector('a'),
      btns = document.querySelectorAll('button');
// btn.onclick = function(){
//         alert('click');
// };
//используем свойство дом-дерева на btn, которое там так и назявается onlick
//это построение не используется обычно, как минимум потому что так нельзя назначить 2 действия на елемент

//Актуальные методы вызова обработчика

// btn.addEventListener('click', () => {
//     alert('click');
// });
// //1 аргумент это название событиыя, 2 - это функция которая будет выполнятся

// btn.addEventListener('click', () => {
//     alert('click2');
// });
// btn.addEventListener('mouseenter', (e) => {
//     console.log (e.target);
    
// });
// //добавление евента который выводит данные о событии event или e
// //e.target выводит информацию о евенте 

// let i =0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1){
//         btn.removeEventListener('mouseenter', deleteElement);
//         //удаляет евент
//     }
// };

const deleteElement = (e) => {
    console.log(e.target);
    //разница между target и currentTarget
    console.log(e.type);
    };
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// наглядный пример того что всплытие событий проишодит из дом дерева вверх. Т.е сначала на child, потом на parent
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.type);
});
//preventDefault - предотвращает дефолтное поведение браузера

//Добавить собые сразу на несколько елементов
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});
//btn = название перебираемых кнопок. 
// в аргументы обработчика события можно добавить объект {once: true}, он означает что обработчик выполнится только 1 раз. 
// альтернатива removeEventListener