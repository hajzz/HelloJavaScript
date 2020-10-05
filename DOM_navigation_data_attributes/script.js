//  "use strict";

//  console.log(document.head); //обращение к дереву, получаем только сам head
//  console.log(document.documentElement);// получаем элементы
//  console.log(document.body.childNodes);//  получаем все узлы(Ноды) документа
//  console.log(document.body.firstChild); //первый нод
//  console.log(document.body.lastChild);//последний нод
// .last(first)ElementChild - получаем строго Элемент 
 

// console.log(document.querySelector('#current').parentNode);
// //вывод родителя нода
// console.log(document.querySelector('#current').parentNode.parentNode); //parentElement - Элемента
// //вывод родителя родителя нода
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// //вывод элемнта по поиску data-атрибутов. Стандарт data-атт появиля в HTML5, удобен для маркировок.
// //nextSibling(previous) - вывод следующего(предыдущего) "соседа", в данном случае - нод
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// //nextSibling(previous) - вывод следующего(предыдущего) соседа - Элемента

//----------------------------------------------------------------------------------
//получаем все ноды документа без текстовых переносов строки

for (let node of document.body.childNodes){
    if (node.nodeName == "#text"){
        continue;
        // оператор continue останавливает цикл и начинает его заново с новым элементом
    }
    console.log(node);
};