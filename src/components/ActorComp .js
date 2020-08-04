import React, { Component } from 'react';
import './ActorComp.css';

// In ActorGallery render multiple ActorComp components (using map or for loop)
//  and pass the actor object to each ActorComp

class ActorComp extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props);

    }
    render() {
        // const myStyle = {
        //     backgroundColor: this.props.color
        //   }
        return (
            <div className="container">
                <div className="card">
                    
                </div>
            </div>
        );
    }
}


export default ActorComp;
