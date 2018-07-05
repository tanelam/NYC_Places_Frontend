import React from "react"
import { Link } from "react-router-dom"

const PlaceCard = (props) => (
	<div className="grey card">
    <div className="ui fluid image">
      <Link to={`/nycplaces/${props.place.id}`} key={props.place.id} >
        <img alt="" src={props.place.main_photo} id={props.place.id} />
      </Link>
    </div>
    <div className="content">
      <div className="header">
        <h2 className="ui grey header">{props.place.name}</h2>
      </div>
    </div>
  </div>
)



export default PlaceCard
