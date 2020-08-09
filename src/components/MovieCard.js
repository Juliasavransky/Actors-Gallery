import React, { Component } from 'react';
import { Card } from 'react-bootstrap';





class MovieCard extends Component {
    render() {
        return (
            <Card className="movieCard" style={{ width: '17rem' }}>
                <Card.Img variant="top" src={this.props.movie.moviePoster} />
                <Card.Body>
                    <Card.Title>
                        Movie Name : {this.props.movie.movietitle}
                    </Card.Title>

                    <Card.Text>
                        Movie Length: {this.props.movie.movieLength}
                    </Card.Text>

                    <Card.Text>
                        Staring: {this.props.movie.movieStar}
                    </Card.Text>

                    <Card.Text>
                        Directored by: {this.props.movie.movieDirector}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default MovieCard;
