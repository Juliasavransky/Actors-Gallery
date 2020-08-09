
class MoviesModel {

    constructor(movietitle, moviePoster, movieId, movieLength, movieStar, movieDirector) {
        this.movietitle = movietitle;
        this.moviePoster = "https://image.tmdb.org/t/p/w500" + moviePoster;
        this.movieId = movieId;
        this.movieLength = movieLength;
        this.movieStar = movieStar;
        this.movieDirector = movieDirector;
    }

}

export default MoviesModel;

