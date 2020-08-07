import React, { Component } from 'react';
import LiveSearchBox from './LiveSearchBox'
import { Container } from 'react-bootstrap';
import './MoviesPage.css';


class MoviesPage extends Component {
    constructor(props){
        super(props);

        const results = [
            "result 1",
            "result 2",
            "result 3",
            "result 4"
        ]

        this.state={
            SearchResults: results
        }
        this.SearchMovies = this.SearchMovies.bind(this);
    }

    SearchMovies(SearchText) {
        this.setState({
            SearchResults: this.state.searchResults.concat(SearchText)
         })
    }  
    render() {

      const { SearchResults } = this.state

        return (
            <div className="p-actors">
                <Container>
                    < LiveSearchBox placeholderText="Search Movies" results={SearchResults} 
                    searchTextChanged={this.SearchMovies } />
                    <p>adffshfgnn</p>
                </Container>
            </div>
        );
    }
}

export default MoviesPage;