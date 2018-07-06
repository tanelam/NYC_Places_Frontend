import React, { Fragment } from "react"
import image from "../media/eventImage.png"

const FoodCard = (props) => {

  const { url, image_url, name, location } = props.place

  return(
    <Fragment>
      <div className="card">
        <a className="image" href={url} target="_blank">
          {image_url ?
            <img src={image_url} alt="" /> :
            <img src={image} alt="" />}
        </a>
        <div className="content">
          <a className="ui grey header" href={url} target="_blank">{name}</a>
          <div className="description">
            {location.display_address}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default FoodCard
