// import React from 'react';
import React, { Component } from 'react';
import ActorComp from './ActorComp';


// Create an ActorGallery component (under the "components" folder).
//  At first the components receives an array of actors as
//   a prop and prints it to a div in the render function

class ActorGallery extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {

        // const { fname, lname, birthday, IMDBlink, img } = this.props;
        // console.log(this.props);

// 
        return (
            <div className="container">
                {this.props.actorsData.map((actor)=><ActorComp actorobject={actor}/>)}
            </div>
        );
    }
}


export default ActorGallery;

