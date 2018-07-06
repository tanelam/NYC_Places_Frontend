import React, { Fragment } from "react"
import image from "../media/eventImage.png"

const FoodCard = (props) => (
  <Fragment>
    <div className="card">
      <a className="image" href={props.food.url} target="_blank">
        {props.food.image_url ?
          <img src={props.food.image_url} alt="" /> :
          <img src={image} alt="" />}
      </a>
      <div className="content">
        <a className="ui grey header" href={props.food.url} target="_blank">{props.food.name}</a>
        <div className="description">
          {props.food.location.display_address}
        </div>
      </div>
    </div>
  </Fragment>
)

export default FoodCard
