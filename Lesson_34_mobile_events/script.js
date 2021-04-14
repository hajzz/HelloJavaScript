//touchstart - 
//touchmove - 
//touchend - 
//touchenter - 
//touchleave -
//touchcancel - 


//touches - 
//targetTouches -
//changedTouches - 

window.addEventListener('DOMContentLoaded', () => {


const box = document.querySelector('.box');

box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log("Start");
    console.log(e.touches);
    //Выдаёт инфу о взаимодействии пальцев со всеми элементами. пример применения 
    console.log(e.targetTouches);
    //с конкретным элементом
    console.log(e.changedTouches);
    // список пальцев которые участвуют в событии
});


box.addEventListener('touchmove', (e) => {
    e.preventDefault();

    console.log("move");
});

box.addEventListener('touchend', (e) => {
    e.preventDefault();

    console.log("end");

});

});