import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class LiveSearchBox extends Component {
    constructor(props){
        super(props);

    }

    render() {
        const { placeholderText } = this.props;

        return (
            <div className="c-LiveSearchBox">
                <Form.Control type="search" placeholder={placeholderText}/>
            </div>
        );
    }
}

export default LiveSearchBox;