import React, { Fragment } from "react"
import { Slide } from 'react-slideshow-image'
import video from "../media/Urban-Timer.mp4"
import RenderEventCards from "../Container-Components/RenderEventCards"
import RenderMap from "../Container-Components/RenderMap"
import RenderFoodCards from "../Container-Components/RenderFoodCards"

const PlacePage = (props) => {

  const { mainPhoto, photoTwo, cardPhoto, name, description, placeVideo, longDescription, zip, address, latitud, longitud } = props
  const images = [ mainPhoto, photoTwo ]

  return(
    <Fragment>
      <div className="ui container">
        <div className="ui large header">
          <h1 className="ui grey large header">
            <img src={cardPhoto} className="ui circular image" alt=""/>
              <div className="content">
                {name}
                <div className="sub header">{description}</div>
              </div>
          </h1>
        </div>
      <div className="ui one column grid">
        <div className="center aligned column">
          {placeVideo ?
            <video src={placeVideo} className="video" autoPlay/> :
            <video src={video} className="video" autoPlay/>
          }
        </div>
      </div>
      <div className="ui two column grid">
        <div className="row">
          <div className="eight wide column">
            <br/>
            <div className="slide-container">
              <Slide
                 images={ images }
                 duration={100000}
                 transitionDuration={2000}
               />
            </div>
          </div>
          <div className="center aligned column">
            <p/>
            <h3 className="ui grey header">{longDescription}</h3>
          </div>
        </div>
      </div>
      <div className="ui one column grid">
        <div className="left aligned column">
          <br/>
          <div className="ui dividing large header">
            <p className="ui grey large header">Events Near Here</p>
          </div>
        </div>
      </div>
      <div className="ui one column grid">
        <div className="column">
          <RenderEventCards zip={zip}/>
        </div>
      </div>
      <div className="ui two column grid">
        <div className="column">
          <br/>
          <h2 className="ui grey header">Address: </h2>
          <h3 className="ui grey header">{address}</h3>
        </div>
        <div className="right aligned column">
          <br/>
          <p className="ui grey huge header">{latitud}</p>
          <p className="ui grey huge header">{longitud}</p>
        </div>
      </div>
      <div className="ui one column grid">
        <div className="column">
          <RenderMap longitud={longitud} latitud={latitud}/>
        </div>
      </div>
      <div className="ui one column grid">
        <div className="left aligned column">
          <div className="ui dividing large header">
            <br/>
            <p className="ui grey large header">Food Near Here</p>
          </div>
        </div>
      </div>
      <div className="ui one column grid">
        <div className="column">
          <RenderFoodCards zip={zip}/>
        </div>
      </div>
     </div>
    </Fragment>
  )
}

export default PlacePage
