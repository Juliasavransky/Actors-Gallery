// import React from 'react';
import React, { Component } from 'react';
import ActorComp from './ActorComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col } from 'react-bootstrap';


class ActorGallery extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            value: ""
        }

    }
    handleOnChange = (event) => {
        this.setState({ value: event.target.value })
    }

    render() {
        const filterCards = this.props.actors.filter((actor) => {
            return actor.fname.includes(this.state.value.toLowerCase())
        })



        // connst filterCardsSearched = filterCards.map((actor)=> <ActorComp actorobject ={actor} )

        return (
            <div className="search">
                <Container>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control placeholder="Search" ControlInput value={this.state.value} type="search" onChange={(event) => this.handleOnChange(event)} />
                    </Form.Group>
                    <Row>
                        {filterCards.map((actor) => <Col lg={3} md={4} sm={6}><ActorComp actorobject={actor} /> </Col>)}
                    </Row>
                </Container>
            </div>
        );
    }
}


export default ActorGallery;
