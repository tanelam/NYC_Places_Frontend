import React from "react"

import eventImage from "./eventImage.png"

class EventCard extends React.Component{

  render(){
    console.log(this.props.event)
    return(
      <div className="card">
        <a className="image" href={this.props.event.event_site_url} target="_blank">
          {this.props.event.image_url !== "" ?
            <img src={this.props.event.image_url} /> :
            <img src={require("./eventImage.png")} />}
        </a>
        <div className="content">
          <a className="header" href={this.props.event.event_site_url} target="_blank">{this.props.event.name}</a>
          <div className="description">
            {this.props.event.location.display_address}
          </div>
        </div>
        <div className="extra content">
          <div>
            <i className="calendar icon"></i>
            From: {this.props.event.time_start}
            <br/>
            To: {this.props.event.time_end}
          </div>
        </div>
      </div>

    )
  }
}


export default EventCard
