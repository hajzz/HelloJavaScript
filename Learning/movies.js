let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {           //создаётся объект со свойствами
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
if (personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30){
    alert("Вы классический зритель"); 
} else if(personalMovieDB.count > 30){
    alert("Вы киноман")
} else {
    alert("Произошла ошибка");
}
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d= prompt('На сколько оцените его?', '');


// personalMovieDB.movies[a] = b; // обращение к переменной, присваивание значения и помещение туда ответа из промпт
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++){            //функция будет повторяться 2 раза
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length <50){ //Если условия соблюдены, то продолжаем
//         personalMovieDB.movies[a] = b;
//     }else {
//         console.log('error');
//         i--;            //добавляем еще один цикл, так как условия не соблюдены
//     }
// }
// console.log(personalMovieDB);