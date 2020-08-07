import React, { Component } from 'react';
import LiveSearchBox from './LiveSearchBox'
import { Container, Col, Row } from 'react-bootstrap';
import './MoviesPage.css';
import MovieCard from './MovieCard'

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

    SearchMovies(searchText) {

        if (searchText) {
            this.setState({
                searchResults: this.state.searchResults.concat(searchText)
            })
        } else {
            this.setState({
                SearchResults: []
            })
        }

    }

    addMovie(index) {
        this.setState({
            movie: this.state.movies.concat(this.state.searchResults[index]),
            SearchResults: []
        })

    }

    render() {

        const { SearchResults, movies } = this.state

        const moviesView = movies.map(movie =>
            <Col lg={3} md={4} sm={6} >
                <MovieCard movie={movies}/>
             </Col>
        )

        return (
            <div className="p-actors">
                <Container>
                    < LiveSearchBox placeholderText="Search Movies" results={SearchResults}
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