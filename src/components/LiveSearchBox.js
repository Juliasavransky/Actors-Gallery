import React, { Component } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import './LiveSearchBox.css';


class LiveSearchBox extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { placeholderText, results } = this.props;

        const listGroupItems = results.map(result =>
             <ListGroup.Item action></ListGroup.Item>);

        return (
            <div className="c-LiveSearchBox">
                <Form.Control type="search" placeholder={placeholderText} />
                <ListGroup className="searchResults">
                   {listGroupItems}
                </ListGroup>
            </div>
        );
    }
}

export default LiveSearchBox;