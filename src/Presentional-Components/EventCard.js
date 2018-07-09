import React, { Fragment } from "react"
import { string, object } from "prop-types"
import image from "../media/eventImage.png"

const EventCard = (props) => {

  const { event_site_url, image_url, name, location, time_start, time_end } = props.event

  return(
    <Fragment>
      <div className="card">
        <a className="image" href={event_site_url} target="_blank">
          {image_url ?
            <img src={image_url} alt="" /> :
            <img src={image} alt="" />
          }
        </a>
        <div className="content">
          <a className="ui grey header" href={event_site_url} target="_blank">{name}</a>
          <div className="description">
            {location.display_address}
          </div>
        </div>
        <div className="extra content">
          <div>
            <i className="calendar icon"></i>
            From: {time_start}
            <br/>
            To: {time_end}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

EventCard.propTypes = {
  event_site_url: string,
  image_url: string,
  name: string,
  location: object,
  time_start: string,
  time_end: string
}

export default EventCard
