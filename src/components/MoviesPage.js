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
                console.log(response.data);
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

        const movietitle = this.state.searchResults[index].original_title;
        const moviePoster = this.state.searchResults[index].poster_path;
        const movieId = this.state.searchResults[index].id;
        // const movieLength = this.state.searchResults[index].runtime;
        // const movieStar = this.state.searchResults[index].cast[0].mane;
        // const movieLength = this.state.searchResults[index].crew[0].mane;

        // axios.get(URL).then(response => {
        //    const url = "https://api.themoviedb.org/3/movie/" + movieId;

        //    response.data.runtime;
        //     this.setState({
        //         searchResults: response.data.results
        //     })

        //      axios.get(URL).then(response => {
        //     const url = "https://api.themoviedb.org/3/movie/" + movieId;
 
        //     response.data.cast[0].mane;
        //     response.data.crew[0].mane;
        //      this.setState({
        //          searchResults: response.data.results
        //      })
 
        //  })

        // })
        
       



        this.setState({
            movies: this.state.movies.concat(new MoviesModel(movietitle, moviePoster, movieId )),
            searchResults: []
        })

    }
    
    render() {

        const { searchResults, movies } = this.state
        const resultStrings = searchResults.map(searchResult => searchResult.name);

        const moviesView = movies.map(movie =>
            <Col lg={3} md={4} sm={6}>
                <MovieCard movie={movies} />
            </Col>)

        
        return (
            <div className="p-actors">
                <Container>
                    < LiveSearchBox placeholderText="Search Movies" results={resultStrings}
                        searchTextChanged={this.SearchMovies} resultSelected={this.addMovie} />
                    <Row>
                        {moviesView}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MoviesPage;
