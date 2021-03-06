let obj = {
    name: 'Val',
    age: 31,
    isSingle: true
};
alert (obj);


const options = {         //создали объeкт со свойствами(ключами)
    name: 'Hajz',
    type: 'jpg',
    size: '1024kb',
    properties: {          //объект внутри объекта со свойствами
        width: 4000,
        height: 2000
    },
    objMethod: function (){     
        console.log('Options method console log');
        //создаём метод внутри объекта
    }
};
options.objMethod(); //вызов метода. синтаксис

const {width, height} = options.properties;//Деструктуризация:
console.log(width, height);
//вывод определённых свойств объектa

console.log(Object.keys(options)); 
// Выводит все ключи содержащиеся в объекте
console.log(Object.keys(options).length); 
// Выводит количество содержащихся ключей


console.log(Object.keys(options)); 
// Выводит все ключи содержащиеся в объекте
console.log(Object.keys(options).length); 
// Выводит количество содержащихся ключей


// console.log(options ['properties'] ['width']);    
//вывод значения свойства объекта properties в объекте options


for (let keyOptions in options){        
    // for...in перебирает значения в объектах, когда for of не может этого сделать.
    //for of перебирает значения в массивиподобных сущностях. нп в строке.
    // Задаётся переменная keyOptions которая будет выводить значения ключей
    //При помощи  метода in ковыряемся в options. 
    //цикл будет повторятся в зависимости от количества ключей
    // console.log(`Option ${keyOptions} contain ${options[keyOptions]}`);   
    //в keyOptions консоль веведет сами ключи, а options [keyOptions] выведет значения
    if (typeof(options[keyOptions]) === 'object'){
        //Проверяем options[keyOptions] если это объект
        for (let keyProperties in options[keyOptions]) {
            //задаём новую переменную внутри для свойства properties в options[keyOptions]
            console.log(`Option ${keyProperties} contain ${options[keyOptions][keyProperties]}`);
            //Выводим в консоль свойства объекта внутри объекта, если таковой имеется
        }
    } else {
        console.log(`Option ${keyOptions} contain ${options [keyOptions]}`);
    }
    }
