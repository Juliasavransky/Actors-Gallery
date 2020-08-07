import React, { Component } from 'react';
import LiveSearchBox from './LiveSearchBox'
import { Container } from 'react-bootstrap';

class MoviesPage extends Component {
    render() {
        return (
            <div className="p-actors">
                <Container>
                    < LiveSearchBox placeholderText="Search Movies" />
                </Container>
            </div>
        );
    }
}

export default MoviesPage;