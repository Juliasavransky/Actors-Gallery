import React, { Component } from 'react';
import { Nav, Navbar, Container,Jumbotron } from 'react-bootstrap';


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
                        <svg width="10em" height="10em" viewBox="0 0 16 16" class="bi bi-camera-reels" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.667 7C2.022 7 1.5 7.522 1.5 8.167v5.666c0 .645.522 1.167 1.167 1.167h6.666c.645 0 1.167-.522 1.167-1.167V8.167C10.5 7.522 9.978 7 9.333 7H2.667zM.5 8.167C.5 6.97 1.47 6 2.667 6h6.666c1.197 0 2.167.97 2.167 2.167v5.666C11.5 15.03 10.53 16 9.333 16H2.667A2.167 2.167 0 0 1 .5 13.833V8.167z"/>
  <path fill-rule="evenodd" d="M11.25 9.15l2.768-1.605a.318.318 0 0 1 .482.263v6.384c0 .228-.26.393-.482.264l-2.767-1.605-.502.865 2.767 1.605c.859.498 1.984-.095 1.984-1.129V7.808c0-1.033-1.125-1.626-1.984-1.128L10.75 8.285l.502.865zM3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
                    
                    </Container>
                </Jumbotron>
            </Container>
        );
    }
}

export default HomePage;