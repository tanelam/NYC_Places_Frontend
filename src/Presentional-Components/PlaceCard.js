import React from "react"
import { Link } from "react-router-dom"

const PlaceCard = (props) => {

	const { id, main_photo, name } = props.place
	
	return(
		<div className="grey card">
	    <div className="ui fluid image">
	      <Link to={`/nycplaces/${id}`} key={id} >
	        <img alt="" src={main_photo} id={id} />
	      </Link>
	    </div>
	    <div className="content">
	      <div className="header">
	        <h2 className="ui grey header">{name}</h2>
	      </div>
	    </div>
	  </div>
	)

}



export default PlaceCard
