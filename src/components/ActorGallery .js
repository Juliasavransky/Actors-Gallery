
import React, { Component } from 'react';


// Create an ActorGallery component (under the "components" folder).
//  At first the components receives an array of actors as
//   a prop and prints it to a div in the render function

class ActorGallery extends React.Component {
    constructor(props) {
        super(props);
       
        console.log(this.props);

    }



    render() {
        return (
            <div>
                Hello!!!
                <ActorComp>{this.props.actorsData}</ActorComp>
            </div>
        );
    }
}


// this.actors.fname, lname, birthday, IMDBlink,img
export default ActorGallery;
