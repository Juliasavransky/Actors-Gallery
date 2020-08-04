import React from 'react';
import React, { Component } from 'react';

// In ActorGallery render multiple ActorComp components (using map or for loop)
//  and pass the actor object to each ActorComp

class ActorComp extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props);

        // const actorsJSX = this.props.actorsData.map(actor =>
        // <div>
        //     <div>{actor.birthday}</div>
        // </div>);
        // {actorsJSX}
    }
    render() {
        return (
            <div className="container">
                <div className="card">
                <img src={this.props.actorobject.img}></img>
                <a className="aActorComp" href={this.props.actorobject.IMDBlink}>
                {this.props.actorobject.fname + ' ' + this.props.actorobject.lname}</a>
            </div>
            </div>
        );
    }
}



export default ActorComp;
