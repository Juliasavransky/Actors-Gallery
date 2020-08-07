import React, { Component } from 'react';
import LiveSearchBox from './LiveSearchBox'
import { Container } from 'react-bootstrap';
import './MoviesPage.css';

class MoviesPage extends Component {

    SearchMovies(SearchText) {
console.log(SearchText);
    }  
    render() {
        const results = [
            "result 1",
            "result 2",
            "result 3",
            "result 4"
        ];

        return (
            <div className="p-actors">
                <Container>
                    < LiveSearchBox placeholderText="Search Movies" results={[]} 
                    searchTextChanged={this.SearchMovies } />
                    <p>adffshfgnn</p>
                </Container>
            </div>
        );
    }
}

export default MoviesPage;