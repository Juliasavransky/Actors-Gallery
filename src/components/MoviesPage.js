import React, { Component } from 'react';
import LiveSearchBox from './LiveSearchBox'
import { Container, Col, Row } from 'react-bootstrap';
import './MoviesPage.css';
import MovieCard from './MovieCard'
import axios from 'axios'


class MoviesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
            movies: []

        }
        this.SearchMovies = this.SearchMovies.bind(this);
        this.addMovie = this.addMovie.bind(this);
    }


    searchMovies(searchText) {

        if (searchText) {
            const URL = "https://api.themoviedb.org/3/search/movie?api_key=cd23a60dc49ca24d9c528a2af135feba&query=" + searchText;

            axios.get(URL).then(response => {
                console.log(response.data);
                // this.setState({
                //     searchResults: response.data.results
                // })

            })

        } else {
            this.setState({
                searchResults: []
            })
        }
    }



    addMovie(index) {

        const movieName = this.state.searchResults[index].name;
        const movieImage = this.state.searchResults[index].profile_path

        this.setState({
            movies: this.state.movies.concat(new MovieModel(movieName, movieImage)),
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
