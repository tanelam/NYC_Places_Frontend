import React from "react"

import { Link } from "react-router-dom"

class PlaceCard extends React.Component{

  render(){
    // console.log(props.place)
  return(
    
    	<div className="pink card">
        <div className="ui fluid image">
          <Link to={`/nycplaces/${this.props.place.id}`} key={this.props.place.id} >
            <img alt="" src={this.props.place.main_photo} id={this.props.place.id} />
          </Link>
        </div>

        <div className="content">
          <div className="header">
            <h2>{this.props.place.name}</h2>
          </div>
        </div>

      </div>


  )
  }
}



export default PlaceCard
