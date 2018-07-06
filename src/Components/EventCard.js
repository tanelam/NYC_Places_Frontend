import React, { Fragment } from "react"
import image from "../media/eventImage.png"

const EventCard = (props) => (
  <Fragment>
    <div className="card">
      <a className="image" href={props.event.event_site_url} target="_blank">
        {props.event.image_url ?
          <img src={props.event.image_url} alt="" /> :
          <img src={image} alt="" />
        }
      </a>
      <div className="content">
        <a className="ui grey header" href={props.event.event_site_url} target="_blank">{props.event.name}</a>
        <div className="description">
          {props.event.location.display_address}
        </div>
      </div>
      <div className="extra content">
        <div>
          <i className="calendar icon"></i>
          From: {props.event.time_start}
          <br/>
          To: {props.event.time_end}
        </div>
      </div>
    </div>
  </Fragment>
)



export default EventCard
