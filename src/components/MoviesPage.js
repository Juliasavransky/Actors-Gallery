import React, { Component } from 'react';
import LiveSearchBox from './LiveSearchBox'
import { Container, Col, Row } from 'react-bootstrap';
import './MoviesPage.css';
import MovieCard from './MovieCard'
import axios from 'axios'
import MoviesModel from '../DataModules/MoviesModel';




class MoviesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
            movies: []

        }
        this.searchMovies = this.searchMovies.bind(this);
        this.addMovie = this.addMovie.bind(this);
    }

    searchMovies(searchText) {

        if (searchText) {
            const URL = "https://api.themoviedb.org/3/search/movie?api_key=cd23a60dc49ca24d9c528a2af135feba&query=" + searchText;

            axios.get(URL).then(response => {
                
                this.setState({
                    searchResults: response.data.results
                })

            })

        } else {
            this.setState({
                searchResults: []
            })
        }
    }

    addMovie(index) {

        let movietitle, moviePoster, movieId, movieLength, movieStar, movieDirector
        movietitle = this.state.searchResults[index].original_title;
        moviePoster = this.state.searchResults[index].poster_path;
        movieId = this.state.searchResults[index].id;


        const MovieURL = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=cd23a60dc49ca24d9c528a2af135feba&language=en-US";
        axios.get(MovieURL).then(response => {
            movieLength = response.data.runtime
            // movieLength = response.data.movieLength.length ? response.data.movieLength : null ;
            
        })

        const CreditsURL = "https://api.themoviedb.org/3/movie/" + movieId + "/credits?api_key=cd23a60dc49ca24d9c528a2af135feba";
        axios.get(CreditsURL).then(response => {
            movieStar = response.data.cast.length ? response.data.cast[0].name : null ;
            movieDirector = response.data.crew.length ? response.data.crew[0].name : null ;
            console.log(movieStar);
            console.log(response.data.cast);

            this.setState({
                movies: this.state.movies.concat(new MoviesModel(movietitle, moviePoster, movieId, movieLength, movieStar, movieDirector)),
                searchResults: []
            })

        })

    }

    render() {

        const { searchResults, movies } = this.state
        const resultStrings = searchResults.map(searchResult => searchResult.original_title);
console.log(movies);
        const moviesView = movies.map(movie =>
            <Col lg={3} md={4} sm={6}>
                <MovieCard movie={movie} />
            </Col>)
// 

        return (
            <div className="p-actors">
                <Container>
                    < LiveSearchBox placeholderText="Search Movies" results={resultStrings}
                        searchTextChanged={this.searchMovies} resultSelected={this.addMovie} />
                    <Row>
                        {moviesView}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MoviesPage;
