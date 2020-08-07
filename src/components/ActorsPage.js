import React, { Component } from 'react';
import LiveSearchBox from './LiveSearchBox'

class ActorsPage extends Component {
    render() {
        return (
            <div className="p-actors">
               < LiveSearchBox/>
            </div>
        );
    }
}

export default ActorsPage;