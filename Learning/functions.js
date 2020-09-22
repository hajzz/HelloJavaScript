'use strict';

function calc(a, b ){           //Функция принимает аргументы
    return (a + b);             //возвращает какое-то действие
}

console.log(calc(14,25));       // помещаем 14 и 25 в аргументы функции


                                    
showText ('Hi');                     //Function declaration.Вызываем функцию и помещаем аргумент
function showText (text){
    console.log(text);              //Помещаем действие в функцию
}


const logger = function(a, b){      //Function expression. объявляется переменная и задаэтся функция
    console.log ('hello');
};
logger();


//Стрелочная функция
const arrowFunction = (a, b) => a + b; //Создаём переменную с аргументами a,b помещаем туда функцию => a + b
                 // const arrowFunction = (a, b) =>  { return a + b};
                 // const arrowFunction = a => a + b;
