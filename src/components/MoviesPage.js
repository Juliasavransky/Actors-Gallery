import React, { Component } from 'react';
import LiveSearchBox from './LiveSearchBox'
import { Container } from 'react-bootstrap';
import './MoviesPage.css';


class MoviesPage extends Component {
    constructor(props){
        super(props);

        this.state={
        SearchResults: []
        }

        this.SearchMovies = this.SearchMovies.bind(this);
        this.addMovie = this.addMovie.bind(this);
    }

    SearchMovies(SearchText) {

        if (SearchText){
            this.setState({
                SearchResults: this.state.searchResults.concat(SearchText)
             })
        } else {
            this.setState({
                SearchResults: []
             })
        }
       
    }  

    addMovie(index){
        alert(htis.state.searchResults[index]);
    }
    render() {

      const { SearchResults } = this.state

        return (
            <div className="p-actors">
                <Container>
                    < LiveSearchBox placeholderText="Search Movies" results={SearchResults} 
                    searchTextChanged={this.SearchMovies } resultSelected={this.addMovie} />
                    <p>adffshfgnn</p>
                </Container>
            </div>
        );
    }
}

export default MoviesPage;