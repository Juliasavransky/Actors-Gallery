
class MoviesModel {

    constructor(movietitle, moviePoster, movieId) {
        this.movietitle = movietitle;
        this.moviePoster = "https://image.tmdb.org/t/p/w500" +moviePoster;
        this.movieId = movieId;
    }

}

export default MoviesModel;

