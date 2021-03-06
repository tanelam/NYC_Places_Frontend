import React, { Fragment } from "react"
import { string } from "prop-types"
import { Slide } from 'react-slideshow-image'
import streetVideo from "../media/Urban-Timer.mp4"
import RenderEventCards from "../Container-Components/RenderEventCards"
import RenderMap from "../Container-Components/RenderMap"
import RenderFoodCards from "../Container-Components/RenderFoodCards"

const PlacePage = (props) => {

  const { main_photo, photo_2, card_photo, name, description, video, long_description, zip, address, latitud, longitud } = props.place
  const images = [ main_photo, photo_2 ]

  return(
    <Fragment>
      <div className="ui container">
        <div className="ui large header">
          <h1 className="ui grey large header">
            <img src={card_photo} className="ui circular image" alt=""/>
              <div className="content">
                {name}
                <div className="sub header">{description}</div>
              </div>
          </h1>
        </div>
      <div className="ui one column grid">
        <div className="center aligned column">
          {video ?
            <video src={video} className="video" autoPlay/> :
            <video src={streetVideo} className="video" autoPlay/>
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
            <h3 className="ui grey header">{long_description}</h3>
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

PlacePage.propTypes = {
  main_photo: string,
  photo_2: string,
  card_photo: string,
  name: string,
  description: string,
  video: string,
  long_description: string,
  zip: string,
  address: string,
  latitud: string,
  longitud: string

}

export default PlacePage
