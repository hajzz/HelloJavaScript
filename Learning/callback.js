"use strict";

function learnJS(lang, callback2, callback1){          
    console.log (`I learn ${lang}!`);
    callback1();
    callback2();                            
}
function hrsho1(){
    console.log('hrsho');
}

function hrsho2(){
    console.log('hrsho2');
}

learnJS('Java Script', hrsho1, hrsho2); 
//Выполнится callback2, потом callback1, т.к. такая очерёдность. 
//calllback  как резервирование места дла выпонения функций в качестве аргумента функции.


//Анонимная функция:
learnJS('Java Script', hrsho1, function(){  //В неё нельзя передать аргументы, так как она исчезает после её вызова
    console.log('anonimous function');
});