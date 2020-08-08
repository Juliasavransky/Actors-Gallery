// import React from 'react';
import React, { Component } from 'react';
import ActorComp from './ActorComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, FormControl, InputGroup, Form } from 'react-bootstrap';


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
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Search</Form.Label>
                            <Form.Control type="email" ControlInput value={this.state.value} type="search" onChange={(event) => this.handleOnChange(event)} />
                        </Form.Group>
                        {filterCards.map((actor) => <ActorComp actorobject={actor} />)}
                    </Form>
                </Container>
            </div>
        );
    }
}


export default ActorGallery;
