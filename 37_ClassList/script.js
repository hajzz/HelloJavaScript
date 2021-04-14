"use strict";


const btns = document.querySelectorAll('button');
// console.log(btns[0].classList.length);


//Если класса red нету, то добавить, если же есть, то убрать

// btns[0].addEventListener('click', () =>{
//     if(!btns[1].classList.contains('red')){
//         btns[1].classList.add('red');
//     }else{
//         btns[1].classList.remove('red')
//     } 
// });

//точно также работает и toggle, только в больших проектах  это не всегда работает

btns[0].addEventListener('click', () =>{
   btns[1].classList.toggle('red');
});


console.log(typeof(btns[0].className));
const btnClsCheck = btns[0].classList.value;
console.log(typeof(btnClsCheck));

