import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';


class ActorComp extends React.Component {
    constructor(props) {
        super(props);

       
    }

    render() {
        return (
            <Card className="actorCard" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={this.props.actorobject.img} />
                <Card.Body>
                    <Card.Title> <a className="text" href={this.props.actorobject.IMDBlink} target="_blank" >
                        {this.props.actorobject.fname + ' ' + this.props.actorobject.lname} </a>
                    </Card.Title>
                    <Card.Text>
                        {this.props.actorobject.ageOfActor()}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}




export default ActorComp;
