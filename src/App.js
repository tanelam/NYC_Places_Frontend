import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import Login from "./Components/Login"

import Place from "./Components/Place"

import PlacesContainer from "./Containers/PlacesContainer"

class App extends Component {



  render() {

    return (
      <div className="App">

        <Switch>
         <Route path="/login" component={Login}/>
         <Route exact path="/nycplaces" component={PlacesContainer}/>
         <Route path="/nycplaces/:id" component={Place}/>
        </Switch>
      </div>
    );
  }
}

export default App;
