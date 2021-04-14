"use strict"


const wrapper = document.querySelector('.btn-block'),
     btns = document.querySelectorAll('button');



//Переключение тогглом классов

btns[0].addEventListener('click', () =>{
    btns[1].classList.toggle('red');
 });



//При клике идет проверка кнопка ли это и выводит сообщение

// wrapper.addEventListener('click', (e) =>{
//     if(e.target && e.target.tagName == "BUTTON"){
//         console.log(e.target)
//     }
// });

//При использовании перебора forEach тo не должен 
//накладываться обработчик события на новый элемент. 

btns.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        if(e.target && e.target.tagName == "BUTTON"){
                    console.log(e.target)
        }    
    })
});


//Добавим кнопку которая также будет исполнять функцию обработчика

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


