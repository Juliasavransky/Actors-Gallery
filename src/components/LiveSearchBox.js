import React, { Component } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import './LiveSearchBox.css';



class LiveSearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
         searchText: ""

        }
        this.handelInputChange = this.handelInputChange.bind(this);

    }
    handelInputChange(event) {
        this.setState({
            searchText: event.target.value
        });

        this.props.searchTextChanged(event.target.value);
    }
    handelOnClick(index){
        this.propsresultSelected(index)
        this.setState({
            searchText: ""
        })
    }
    render() {
        const { placeholderText, results, resultSelected } = this.props;
        const { searchText } = this.state;

        const listGroupItems = results.map((result, index) =>
    <ListGroup.Item key={index} action onClick={() => this.handelOnClick(index)}>{result}</ListGroup.Item>);

        return (
            <div className="c-LiveSearchBox">
                <Form.Control type="search" placeholder={placeholderText} value={searchText}
                    onChange={this.handelInputChange} />
                <ListGroup className="searchResults">
                    {listGroupItems}
                </ListGroup>
            </div>
        );
    }
}

export default LiveSearchBox;