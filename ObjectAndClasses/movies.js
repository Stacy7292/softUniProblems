/* create class movie with the following properties: name, director and date
create class moviesRepository: moviesArr

*/
function solve(arr) {
    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    class MoviesRepository {
        constructor() {
            this.movies = [];
        }

        addMovie(movie) {
            this.movies.push(movie);
        }

        getMovie(movieName) {
            let foundMovie = this.movies.find(m => m.name === movieName);
            return foundMovie;
        }
    }

    let moviesRepository = new MoviesRepository();

    for (let inputLine of arr) {
        if (inputLine.includes("add movie ")) {
            let movie = inputLine.split("add movie ");
            let movieName = movie[1];

            let newMovie = new Movie(movieName, "", "");
            moviesRepository.addMovie(newMovie);

        } else if (inputLine.includes(" directed by ")){
            let partsArr = inputLine.split(" directed by ");
            let movieName = partsArr[0];
            let director = partsArr[1];

            let foundMovie = moviesRepository.getMovie(movieName);
            if (foundMovie){
                foundMovie.director = director;
            }

        } else if (inputLine.includes(" on date ")){
            let partsArr = inputLine.split(" on date ");
            let movieName = partsArr[0];
            let date = partsArr[1];

            let foundMovie = moviesRepository.getMovie(movieName);
            if (foundMovie){
                foundMovie.date = date;
            }
        }
    }

    for (let movie of moviesRepository.movies){
        console.log(`${movie.name} ${movie.director} ${movie.date}`)
    }

}

solve(['add movie Fast and Furious',
    'add movie Godfather',
    'Inception directed by Christopher Nolan',
    'Godfather directed by Francis Ford Coppola',
    'Godfather on date 29.07.2018',
    'Fast and Furious on date 30.07.2018',
    'Batman on date 01.08.2018',
    'Fast and Furious directed by Rob Cohen'
]);