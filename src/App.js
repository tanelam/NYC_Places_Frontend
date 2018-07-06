import React from 'react';
import { Route, Switch } from "react-router-dom"
import RenderPlacePage from "./Container-Components/RenderPlacePage"
import PlacesContainer from "./Container-Components/PlacesContainer"
import './App.css'

const App = () => (
  <div className="App">
    <Switch>
     <Route exact path="/nycplaces" component={PlacesContainer}/>
     <Route path="/nycplaces/:id" component={RenderPlacePage}/>
    </Switch>
  </div>
)

export default App;
