import React, { Component, Fragment } from "react"
import PlaceCard from "./PlaceCard"
import NewYorkImage from "./NewYorkImage"
import CategoriesSelectMenu from "./CategoriesSelectMenu"

class PlacesCollection extends Component{
  render(){

    const place = this.props.places.map(place => <PlaceCard key={place.id} place={place}/>)

    return(
     <Fragment>
      <div className="ui secondary pointing massive menu">
       <a className="active grey item" href="/nycplaces">
         NYC Places
       </a>
      </div>
      <div className="ui container">
        <NewYorkImage/>
        <br/>
        <CategoriesSelectMenu handleChange={this.props.handleChange}/>
        <br/>
       <div className="ui three cards">{place}</div>
      </div>
     </Fragment>
    )
  }
}

export default PlacesCollection
