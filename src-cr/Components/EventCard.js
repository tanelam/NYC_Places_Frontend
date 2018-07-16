import React from "react"

class EventCard extends React.Component{

  render(){
     // console.log(this.props.event === [])
    return(
    <React.Fragment>
      <div className="card">
        <a className="image" href={this.props.event.event_site_url} target="_blank">
          {this.props.event.image_url !== "" ?
            <img src={this.props.event.image_url} alt="" /> :
            <img src={require("./eventImage.png")} alt="" />}
        </a>
        <div className="content">
          <a className="ui grey header" href={this.props.event.event_site_url} target="_blank">{this.props.event.name}</a>
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
    </React.Fragment>
    )
  }
}


export default EventCard
