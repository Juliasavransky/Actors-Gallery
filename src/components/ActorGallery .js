
import React, { Component } from 'react';


// Create an ActorGallery component (under the "components" folder).
//  At first the components receives an array of actors as
//   a prop and prints it to a div in the render function

class ActorGallery extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
    }
    render() {

        // const { fname, lname, birthday, IMDBlink, img } = this.props;
        // console.log(this.props);

        const actorsJSX = this.props.actorsData.map(actor =>
            <div>
                <div>{actor.fname}</div>
                <div>{actor.lname}</div>
                <div>{actor.birthday}</div>
                <div>{actor.IMDBlink}</div>
                <div>{actor.img}</div>
            </div>);

        return (
            <div >
                <ActorComp actorsJSX={actorsJSX} />
            </div>
        );
    }
}


export default ActorGallery;

