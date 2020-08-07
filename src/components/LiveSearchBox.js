import React, { Component } from 'react';

class LiveSearchBox extends Component {
    constructor(props){
        super(props);

    }

    render() {
        const { placeholderText }=this.props;
        return (
            <div className="c-LiveSearchBox">
                <input type="search" placeholder={placeholderText}/>
            </div>
        );
    }
}

export default LiveSearchBox;