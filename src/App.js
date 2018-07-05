import React from 'react';
import { Route, Switch } from "react-router-dom"
import Place from "./Components/Place"
import PlacesContainer from "./Containers/PlacesContainer"
import './App.css'

const App = () => (
  <div className="App">
    <Switch>
     <Route exact path="/nycplaces" component={PlacesContainer}/>
     <Route path="/nycplaces/:id" component={Place}/>
    </Switch>
  </div>
)

export default App;
