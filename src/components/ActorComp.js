import React from 'react';
// import React, { Component } from 'react';

// In ActorGallery render multiple ActorComp components (using map or for loop)
//  and pass the actor object to each ActorComp

class ActorComp extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.actorobject);



    }

    render() {
        return (
            <div className="card col-lg-3 col-md-3 col-sm-12">
                <div className="">
                    <img src={this.props.actorobject.img} /><br/>
                    <a className="text" href={this.props.actorobject.IMDBlink}target="_blank" >
                        {this.props.actorobject.fname + ' ' + this.props.actorobject.lname} </a>
                        <p className="text">{this.props.actorobject.ageOfActor()}</p>
                </div>
            </div>
        );
    }
}




export default ActorComp;


      // const actorsJSX = this.props.actorsData.map(actor =>
        //     <div>
        //         <div>{actor.fname}</div>
        //         <div>{actor.lname}</div>
        //         <div>{actor.birthday}</div>
        //         <img src={actor.IMDBlink}></img>
        //         <a href={actor.img}></a>
        //     </div>);  {actorsJSX}