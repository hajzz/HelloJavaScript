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


document.addEventListener('DOMContentLoaded', () => {

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
        //   movieListItems =document.querySelectorAll('.promo__interactive-item'),
          trashButton = document.querySelectorAll('.delete'),
          inputPlaceholderValue =document.querySelector('.adding__input'),
          confirmButton =document.querySelector('button'),
          addForm = document.querySelector('form.add'),
          addFromInput = addForm.querySelector('.adding__input');
    
    // PromoBg.style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat;';
    PromoBg.style.backgroundImage = 'url("img/bg.jpg")';
    genrePromo.innerHTML = 'ДРАМА';
    adv.remove();
    
    const arrSort = (arr) => {
        arr.sort();
    };
    
    
    
    // console.log(addForm);

    function addMovieToList(moviesARG, MovieListARG){
        arrSort(movieDB.movies);
        MovieListARG.innerHTML ="";
        moviesARG.forEach((movie, count) =>{
            MovieListARG.innerHTML += `
            <li class="promo__interactive-item">${count +1} ${movie}
            <div class="delete"></div>
        </li>
            `;
        });
            addForm.addEventListener('submit', (e)=> {
            e.preventDefault();

                let newEntry = addFromInput.value;
                // let newEntryLenght =newEntry.length;
                // console.log(newEntryLenght);
                // newEntry = `${newEntry.substring(0, 3)}...`;
               

                if (newEntry){
                    // newEntry.toString();
                    // console.log(newEntry.lenght)    //????? .lenght??!?!
                    // if (newEntry.lenght >= 10){
                    //     newEntry = `${newEntry.substring(0, 10)}...`; 
                    //     console.log(newEntry);
                    // }
                    // console.log(newEntry.value);
                   
                movieDB.movies.push(newEntry); //why we need to plaece it into a variable? Cuz .value keeps its values and it will appear on the page couple of times                
                addMovieToList(movieDB.movies, movieList);
                }
            e.target.reset();
        });


    };
    
    arrSort(movieDB.movies);
    addMovieToList(movieDB.movies, movieList);



    document.querySelectorAll('delete').forEach((btn, i) => {
        console.log(btn);
            btn.addEventListener('click', (e) => {
            console.log(e.target);
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
        });
        
    });

});

