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
     // .then(place => console.log(place))
  )


  componentDidMount = () => {
    this.fetchPlace()
  }

  handleResponse = (place) => {
    this.setState({
      place: place
    })
  }

  render(){
    const images = [
      this.state.place.main_photo,
      this.state.place.photo_2
    ]

    const lat = parseFloat(this.props.latitud || "40.75")
    const lng = parseFloat(this.props.longitud || "-73.98")

    const zip = (this.state.place.zip || "10174")
    console.log(zip)
    return(
      <React.Fragment>

      <div className="ui secondary pointing massive menu">
        <a className="active pink item" href="/nycplaces">
          Home
        </a>
      </div>

      <div className="ui container">

        <h1 className="ui left aligned huge header">
          <img src={this.state.place.card_photo} className="ui circular image" alt=""/>
          {this.state.place.name}
        </h1>

        <div className="ui one column grid">
            <div className="center aligned column">
              <video src={this.state.place.video} width="100%" height="600" autoPlay>
              </video>
            </div>
        </div>

          <div className="ui two column grid">

            <div className="column">

              <div className="slide-container">
                <Slide
                   images={ images }
                   duration={100000}
                   transitionDuration={2000}
                 />
              </div>
            </div>

            <div className="center aligned column">

              <h2>Information:</h2>
              <h3>{this.state.place.long_description}</h3>

            </div>

          </div>

          <div className="ui one column grid">
            <div className="column">
              <h2>Address: </h2>
              <h3>{this.state.place.address}</h3>
              <Map longitud={this.state.place.longitud} latitud={this.state.place.latitud} />
            </div>
          </div>
           <Event zip={zip}/>
      </div>
      </React.Fragment>
      )
    }
  }

export default Place
