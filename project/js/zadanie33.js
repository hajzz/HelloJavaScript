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
    //загружает все элементы перед тем как пустать скрипт

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addFormInput = addForm.querySelector('.adding__input'),
        formCheckox = addForm.querySelector('[type = "checkbox"]');
    
        // console.log(formCheckox.checked);
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const sortArray = (arr) => {
        arr.sort();
    };
    
    
    function addMovieToList(films, parent) {
        parent.innerHTML = '';
    
        sortArray(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>`;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                addMovieToList(films, parent);
                console.log(movieDB.movies);
            });
        });
    }
    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        let newFilm = addFormInput.value;
        let favorite = formCheckox.checked;
    
        if (favorite) {
            console.log("Adding to favorites");
        }
    
        if (newFilm) {
    
            if (newFilm.length > 5) {
                newFilm = `${newFilm.substring(0, 6)}...`;
            }
            
            movieDB.movies.push(newFilm);
            console.log(movieDB.movies);
            addMovieToList(movieDB.movies, movieList);
        }
    
    
        e.target.reset();
    });
    
    
    addMovieToList(movieDB.movies, movieList);
    deleteAdv(adv);

});




