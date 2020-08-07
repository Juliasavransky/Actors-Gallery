// import React from 'react';
import React, { Component } from 'react';
import ActorComp from './ActorComp';


class ActorGallery extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            value: ""
        }

    }
    handleOnChange = (event) => {
        console.log("hello");
        this.setState({ value: event.target.value })
    }

    render() {
        const filterCards = this.props.actors.filter((actor) => {
            return actor.fname.includes(this.state.value.toLowerCase())

        })

        return (
            <div className="search">
                <label for="search">Search: </label>
                <input value={this.state.value} type="search" onChange={(event) => this.handleOnChange(event)}></input>
                <div className="container">
                    {filterCards.map((actor) => <ActorComp actorobject={actor} />)}
                </div>
            </div>
        );
    }
}


export default ActorGallery;

