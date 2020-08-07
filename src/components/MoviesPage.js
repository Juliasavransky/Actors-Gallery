import React, { Component } from 'react';
import LiveSearchBox from './LiveSearchBox'
import { Container } from 'react-bootstrap';
import './MoviesPage.css';

class MoviesPage extends Component {
    render() {
        return (
            <div className="p-actors">
                <Container>
                    < LiveSearchBox placeholderText="Search Movies" />
                    <p>adffshfgnn</p>
                </Container>
            </div>
        );
    }
}

export default MoviesPage;