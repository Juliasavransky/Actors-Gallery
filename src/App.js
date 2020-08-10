import React from 'react';
import './App.css';
import ActorModel from './DataModules/ActorModel';
import ActorGallery from './components/ActorGallery';
import axios from 'axios';
import MoviesPage from './components/MoviesPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import { HashRouter, Switch, Route } from 'react-router-dom';




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
        <HashRouter>
          <Switch>
            <Route exact path="/">
            <HomePage/>
            </Route>
            <Route exact path="/actors">
            <ActorGallery actors={this.state.actors} />
            </Route>
            <Route exact path="/movies">
            <MoviesPage/>
            </Route>
          </Switch>
        </HashRouter>
        
        
      </div>
    );
  }

}

export default App;

