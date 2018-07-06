import React, { Component, Fragment } from "react"
import PlaceCard from "./PlaceCard"
import NewYorkImage from "./NewYorkImage"

class PlacesCollection extends Component{
  render(){

    const place = this.props.places.map(place => <PlaceCard key={place.id} place={place}/>)
    const categories = ["all", "sightseeing", "discovering", "traveling", "hiking", "shopping", "going_out", "eating", "doing_sports"]
    const category = categories.map(category => <option value={category} key={category}>{category.toUpperCase()}</option>)

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
        <select name="select" onChange={this.props.handleChange} className="ui fluid normal dropdown">
          {category}
        </select>
        <br/>
       <div className="ui three cards">{place}</div>
      </div>
     </Fragment>
    )
  }
}

export default PlacesCollection
