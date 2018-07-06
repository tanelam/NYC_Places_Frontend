import React from 'react';
import { Route, Switch } from "react-router-dom"
import RenderPlacePage from "./Container-Components/RenderPlacePage"
import RenderPlacesGallery from "./Container-Components/RenderPlacesGallery"
import './App.css'

const App = () => (
  <div className="App">
    <Switch>
     <Route exact path="/nycplaces" component={RenderPlacesGallery}/>
     <Route path="/nycplaces/:id" component={RenderPlacePage}/>
    </Switch>
  </div>
)

export default App;
