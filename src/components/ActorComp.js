import React from 'react';
import { Card } from 'react-bootstrap';


class ActorComp extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.actorobject);



    }

    render() {
        return (
            <div className="actorComp">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.actorobject.img} />
                    <Card.Body>
                    <Card.Title> <a className="text" href={this.props.actorobject.IMDBlink} target="_blank" >
                            {this.props.actorobject.fname + ' ' + this.props.actorobject.lname} </a>
                       </Card.Title>
                       <Card.Text>
                           {this.props.actorobject.ageOfActor()}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}




export default ActorComp;
