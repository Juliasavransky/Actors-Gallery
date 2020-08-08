import React, { Component } from 'react';
import { Card } from 'react-bootstrap';





class MovieCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={this.props.movie.moviePoster} />
                    <Card.Body>
                        <Card.Title>
                        {this.props.movie.movietitle}
                        </Card.Title>
                        <Card.Text>
                        {this.props.movie.movieId}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MovieCard;
