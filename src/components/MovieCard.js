import React, { Component } from 'react';
import { Card } from 'react-bootstrap';




class MovieCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>
                        {this.props.movie}
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                         </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MovieCard;