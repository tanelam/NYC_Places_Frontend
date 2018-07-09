import React, { Fragment } from "react"
import { array } from "prop-types"
import PlaceCard from "./PlaceCard"
import NewYorkImage from "./NewYorkImage"
import CategoriesSelectMenu from "./CategoriesSelectMenu"

const PlacesGallery = (props) => {

  const place = props.places.map(place => <PlaceCard key={place.id} place={place}/>)

  return(
   <Fragment>
    <div className="ui container">
      <NewYorkImage/>
      <br/>
      <CategoriesSelectMenu handleChange={props.handleChange}/>
      <br/>
      <div className="ui three cards">{place}</div>
    </div>
   </Fragment>
  )
}

PlacesGallery.propTypes = {
  places: array
}

export default PlacesGallery
