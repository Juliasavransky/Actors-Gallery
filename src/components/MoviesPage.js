import React, { Component } from 'react';
import LiveSearchBox from './LiveSearchBox'

class MoviesPage extends Component {
    render() {
        return (
            <div className="p-actors">
               < LiveSearchBox placeholderText="Search Movies"/>
            </div>
        );
    }
}

export default MoviesPage;