import React from "react"

import { Slide } from 'react-slideshow-image';

import Event from "./Event"

import Map from "./Map"


class Place extends React.Component {

  state = {
    place: [],
  }

  fetchPlace = () => (
    fetch(`http://localhost:8000/places/${this.props.match.params.id}`)
    .then(resp => resp.json())
    .then(place => this.handleResponse(place))
  )



  componentDidMount = () => {
    this.fetchPlace()
  }

  handleResponse = (place) => {
    this.setState({
      place: place
    })
  }

  // <h1 className="ui huge header">
  //   <img src={this.state.place.card_photo} className="ui circular image" alt=""/>
  //   {this.state.place.name}
  // </h1>

  render(){
    const images = [
      this.state.place.main_photo,
      this.state.place.photo_2
    ]

    const lat = parseFloat(this.props.latitud || "40.75")
    const lng = parseFloat(this.props.longitud || "-73.98")

    const zip = (this.state.place.zip || "10174")

    return(
      <React.Fragment>

      <div className="ui secondary pointing massive menu">
        <a className="active pink item" href="/nycplaces">
          Home
        </a>
      </div>

      <div className="ui container">
        <div className="ui large header">

            <h1 className="ui large header">
              <img src={this.state.place.card_photo} className="ui circular image" alt=""/>
                <div className="content">
                  {this.state.place.name}
                  <div className="sub header">{this.state.place.description}</div>
                </div>
            </h1>


        </div>

        <div className="ui one column grid">
            <div className="center aligned column">
              {this.state.place.video !== null ?
              <video src={this.state.place.video} width="100%" height="600" autoPlay>
              </video> :
              <video src={require("./Urban-Timer.mp4")} width="100%" height="600" autoPlay/>
            }
            </div>
        </div>

          <div className="ui three column grid">
            <div className="row">
            <div className="eight wide column">

              <div className="slide-container">
                <Slide
                   images={ images }
                   duration={100000}
                   transitionDuration={2000}
                 />
              </div>
            </div>
            <div className="eight wide column">
              <Event zip={zip}/>
            </div>
          </div>

          </div>

          <div className="ui one column grid">
            <div className="column">
              <h2>Address: </h2>
              <h3>{this.state.place.address}</h3>
              <Map longitud={this.state.place.longitud} latitud={this.state.place.latitud} />
            </div>
          </div>
      </div>
      </React.Fragment>
      )
    }
  }


  // <div className="center aligned column">
  //
  //   <h2>Information:</h2>
  //   <h3>{this.state.place.long_description}</h3>
  //
  // </div>

export default Place
