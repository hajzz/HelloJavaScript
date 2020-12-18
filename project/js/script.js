/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const advertising = document.getElementsByClassName('promo__adv');
// console.log(advertising);
advertising[0].remove();

const promoGenre = document.getElementsByClassName('promo__genre');
// console.log(typeof(promoGenre[0].firstChild));
promoGenre[0].firstChild.textContent = 'драма';

const background = document.querySelector('.promo__bg');
console.log(background);  
background.style.backgroundImage = 'url("img/bg.jpg")';

const movieList = document.querySelector('.promo__interactive-list');
console.log(movieList);

movieList.innerHTML = '';
//удаляем html код

movieDB.movies.sort();

movieDB.movies.forEach((item, i) =>{
    movieList.innerHTML += `<li class="promo__interactive-item"> ${i} ${item}
    <div class="delete"></div>
</li>`;
});
//перебираем массив методом forEach и вызываем функцию с callback'ом где item 
//это список из фильма  и i это итератор и заодно и нумератор
//В Функции задаем действие: запиши HTML код CSS при помощи innerHTML в который вставляем код из index.html. 
//названия фильмов и нумерацию вставляем в интерполяцию
