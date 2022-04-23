/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов смотрел', '');

    while(numberOfFilms == '' || numberOfFilms == null ||  isNaN(numberOfFilms)){
        numberOfFilms = +prompt('сколько фильмов смотрел', '');
    }
    
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms(){
    for (let i=0; i<2; i++){
        const a = prompt('один из последних просмотренных фильмов', '');
        const b = prompt('на сколько оцените его', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        }else {
            console.log('error');
            i--;
        }
    }   
}

// rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('просмотрено мало фильмов');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    }else if(personalMovieDB.count >= 30){
        console.log('вы киноман');
    }else{
        console.log('Произошла ошибка');
    }    
}

// detectPersonalLevel();

function showMyDB(hidden){
   if(!hidden){
    console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.private);

function writeYourGenres(){
  for (let i=1; i<=3; i++){
      personalMovieDB.genres[i-1] = prompt(`ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();











