// "use strict";

const soldier = {
    HP: 500,
    CP: 100,
    doingSmth: function(){
console.log('Hi');
    }
};

const john ={
    HP: 100
};

john.__proto__ = soldier;
// depricated use of copying prototypes.

Object.setPrototypeOf(john, soldier);
//Актуальный метод копирования свойств прототипов

const john2 = Object.create(soldier);
//Еще один способ

john2.doingSmth();