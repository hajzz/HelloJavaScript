let numberOfFilms;

function start(){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {           //создаётся объект со свойствами
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function questions(){
    if (personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30){
        alert("Вы классический зритель"); 
    } else if(personalMovieDB.count > 30){
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

questions();


// const a = 0,
//       b = 0,
//       c = 0,
//       d = 0;



// personalMovieDB.movies[a] = b; // обращение к переменной, присваивание значения и помещение туда ответа из промпт
// personalMovieDB.movies[c] = d;



function answers(){
    for (let i = 0; i < 2; i++){            //цикл будет повторяться 2 раза
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length <50){ //Если условия соблюдены, то продолжаем
            personalMovieDB.movies[a] = b;
        }else {
            console.log('error');
            i--;            //добавляем еще один цикл, так как условия не соблюдены
        }
    }
}
answers();


// let i = 0;
// while (i < 1){
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     if(a != null && a != '' && a.length < 50){ //Если условия соблюдены, то продолжаем
//         personalMovieDB.movies = a;
//     }else {
//         console.log('error');
//         i--;
//     }
// }
// let i2 = 0;
// while (i2 < 1){
//     i2++;
//     const b = prompt('На сколько оцените его?', '');
//     if(b != null && b != '' && b.length <50){ //Если условия соблюдены, то продолжаем
//               personalMovieDB.movies = b;
//           }else {
//               console.log('error');
//               i2--;
//           }
// }


function showMyDB(hidden){        //Передаём значение свойства в private в функцию. !hidden `значит = false, то есть будет показываться
    if(!hidden){
     console.log(personalMovieDB);
    }    
}
showMyDB(personalMovieDB.private);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${1}`);  // Back-tick ` позволяет использовать выражение в строке
        personalMovieDB.genres[i - 1] = genre;                      // i - 1 чтобы началось с нуля
    }
}
writeYourGenres();

