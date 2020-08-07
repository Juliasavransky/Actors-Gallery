import React from 'react';
import './App.css';
import ActorModel from './DataModules/ActorModel';
import ActorGallery from './components/ActorGallery';
import { render } from 'react-dom';
import axios from 'axios';
import ActorsPage from './components/ActorsPage'


class App extends React.Component {
  // console.log(ActorModel) 
  constructor(props) {
    super(props);


    this.state = {
      actors: []
    }

  }

componentDidMount(){
  axios.get("actors.json").then(response => {
    this.setState({
      actors: response.data.map(plainActor => new ActorModel(plainActor.fname, plainActor.lname, plainActor.birthday, plainActor.IMDBlink, plainActor.img))
    })

  })
}

  render() {
    return (
      <div className="App">
        <ActorGallery actors={this.state.actors} />
        <ActorsPage/>
      </div>
    );
  }

}

export default App;

