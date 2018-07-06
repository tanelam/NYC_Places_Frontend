import React from "react"
import image from "../media/nyc.png"
import "../App.css"

const NewYorkImage = () => (
  <div className="ui three column grid">
    <div className="column"/>
    <div className="column"/>
    <div className="center aligned column">
      <img src={image} className="heading-image" alt=""/>
      <h1 className="ui grey header">Explore NYC</h1>
    </div>
  </div>
)

export default NewYorkImage
