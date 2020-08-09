import React, { Component } from 'react';
import { Nav, Navbar, Container, Col, Row, Jumbotron } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <Container>
                <Navbar bg="light" variant="light">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Actors">Features</Nav.Link>
                        <Nav.Link href="#Movies">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
                <Jumbotron fluid>
                    <Container>
                        <h1>The Wors Movie App Ever!!!</h1>
                        <p>
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                        </p>

                    </Container>
                </Jumbotron>
            </Container>
        );
    }
}

export default HomePage;