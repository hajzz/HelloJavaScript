//Конвертурием в типы данных

// В строку
//1
console.log(typeof(String(null)));

//2
console.log(typeof(5 + ''));

//В числовой тип
//1
console.log(typeof(Number('4')));

//2
console.log(typeof(+'4'));

//3
console.log(typeof(parseInt('15px', 10))); //10 значит десятичная система

//4
let answr = +prompt("Hello", ''); // +promptПереводит тип данных в числовой

//В булиновое значение

//0, '', null, undefined, NaN = false

//1
console.log(typeof(Boolean('4')));
//2
console.log(typeof(!!'4'));
