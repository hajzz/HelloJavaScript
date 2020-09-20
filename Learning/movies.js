let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {           //создаётся объект со свойствами
    count: numberOfFilms,
    movies: [],
    actors: {},
    genres: [],
    private: false
};
if (personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30){
    alert("Вы классический зритель"); 
} else if(personalMovieDB.count > 30){
    alert("Вы киноман");
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

let i = 0;
while (i < 1){
    i++;
    const a = prompt('Один из последних просмотренных фильмов?', '');
    if(a != null && a != '' && a.length < 50){ //Если условия соблюдены, то продолжаем
        personalMovieDB.movies = [a];
    }else {
        console.log('error');
        i--;
    }
}
let i2 = 0;
while (i2 < 1){
    i2++;
    const b = prompt('На сколько оцените его?', '');
    if(b != null && b != '' && b.length <50){ //Если условия соблюдены, то продолжаем
              personalMovieDB.movies = [b];
          }else {
              console.log('error');
              i2--;
          }
}
console.log(personalMovieDB);