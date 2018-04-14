import React from "react"

class EventCard extends React.Component{

  render(){
    console.log(this.props.event)
    return(
      <div>
        <div className="ui card">
          <div className="image">
            {this.props.event.image_url !== "" ?
            <img src={this.props.event.image_url}/> :
              <img src="https://i.pinimg.com/564x/60/2e/28/602e287f604bddaa84796b2ef352a9cc.jpg" />}
          </div>
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
    </div>
    )
  }
}


export default EventCard
