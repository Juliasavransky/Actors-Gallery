import React, { Component } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import './LiveSearchBox.css';


class LiveSearchBox extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { placeholderText } = this.props;

        return (
            <div className="c-LiveSearchBox">
                <Form.Control type="search" placeholder={placeholderText} />
                <ListGroup className="searchResults">
                    <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default LiveSearchBox;