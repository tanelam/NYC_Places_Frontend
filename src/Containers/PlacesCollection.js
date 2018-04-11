import React from "react"

import PlaceCard from "../Components/PlaceCard"

import Place from "../Components/Place"

import { Route } from "react-router-dom"

import HeroImage from "../Components/HeroImage"


class PlacesCollection extends React.Component{

  render(){

    const place = this.props.places.map(place =>

      <PlaceCard key={place.id} place={place}/>)

        // <Dropdown handleChange={this.props.handleChange}/>

    return(

      <div>
        <HeroImage/>
        <br/>
        <div className="ui vertical menu">
          <select name="select" onChange={this.props.handleChange} className="ui dropdown">
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
        </div>

        <div className="ui container">
         <div className="ui three cards">{place}</div>
        </div>

      </div>
    )
  }
}

export default PlacesCollection
