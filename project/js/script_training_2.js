
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


const adv = document.querySelector('.promo__adv'),
      genrePromo =document.querySelector('.promo__genre'),
      PromoBg = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list'), //We  need to get item, not an array. To be able to remove it
      movieList2 =document.querySelectorAll('.promo__interactive-item'),
      trashButton = document.querySelector('.delete');

// PromoBg.style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat;';
PromoBg.style.backgroundImage = 'url("img/bg.jpg")';
genrePromo.innerHTML = 'ДРАМА';
adv.remove();
movieDB.movies.sort();
movieList.innerHTML = ""; //deleteing all the HTML list

// movieDB.movies.forEach((movie, count) =>{
//     movieList.innerHTML += `
//     <li class="promo__interactive-item">${count +1} ${movie}
//     <div class="delete"></div>
// </li>
//     `;
// });


// create Element, add class, add content from array 


movieDB.movies.forEach((movieName, count) => {

    const li = document.createElement('li');
    li.classList.add('promo__interactive-item')
    movieList.append(li);
    li.insertAdjacentText('afterbegin', `${count + 1} ${movieName}`);
    
    // console.log(document.querySelectorAll('.promo__interactive-item'));
    
});
const li2 = document.querySelectorAll('.promo__interactive-item');
li2.forEach((element, key) =>{
    element.append(trashButton);
    console.log(element)
});





// const li = document.createElement('li');
// li.classList.add('promo__interactive-item');
// movieList.append(li);
// li.insertAdjacentText('afterbegin', 'test');
// li.append(trashButton);

// console.log(li);