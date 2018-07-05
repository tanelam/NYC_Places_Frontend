import React from "react"

import PlaceCard from "../Components/PlaceCard"

import HeroImage from "../Components/HeroImage"


class PlacesCollection extends React.Component{

  render(){

    const place = this.props.places.map(place =>

      <PlaceCard key={place.id} place={place}/>)

  // <HeroImage/>
    return(

     <div>
       <div className="ui secondary pointing massive menu">
         <a className="active grey item" href="/nycplaces">
           NYC Places
         </a>
       </div>

        <div className="ui container">
          <HeroImage/>
          <br/>
          <select name="select" onChange={this.props.handleChange} className="ui fluid normal dropdown">
            <option value="all">All</option>
            <option value="sightseeing">Sightseeing</option>
            <option value="discovering">Discovering</option>
            <option value="traveling">Traveling</option>
            <option value="hiking">Hiking</option>
            <option value="shopping">Shopping</option>
            <option value="going_out">Going Out</option>
            <option value="eating">Eating</option>
            <option value="doing_sports">Doing Sports</option>
          </select>
          <br/>

         <div className="ui three cards">{place}</div>
        </div>
      </div>

    )
  }
}

export default PlacesCollection
