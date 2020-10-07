/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. 
Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const confirmButton = document.getElementById('confirmButton');
// console.log(confirmButton);
const inputBox = document.getElementsByClassName('adding__input');
// console.log(inputBox[0]);
 const trashButton = document.querySelectorAll('.delete'),
       trashButtonParent = document.querySelector('.delete').parentElement;
 console.log(trashButton);

confirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    // inputBox.forEach((item) => {
    //     inputBox = item;
    // });
    let newEntry = inputBox[0].value;
    newEntry = String(newEntry);
    if (newEntry.lengh >= 6){ 
        newEntry.slice(-1,);
        newEntry += '...';
    // } else if(true){
    //     movieDB.movies.push(inputBox[0].value);
    }
    console.log(newEntry);
    // console.log(typeof(newEntry.lengh));
});
//adding movie to out database
// console.log(inputBox[0].value);
// console.log(inputBox);

trashButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('tarshbutton');
});

