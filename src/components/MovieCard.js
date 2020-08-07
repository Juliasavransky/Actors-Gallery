import React, { Component } from 'react';
import { Card } from 'react-bootstrap';




class MovieCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={this.props.actor.imgURL} />
                    <Card.Body>
                        <Card.Title>
                        {this.props.movie.name}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MovieCard;
