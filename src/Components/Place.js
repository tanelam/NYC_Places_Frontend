import React from "react"

import { Slide } from 'react-slideshow-image';

import { NavLink } from 'react-router-dom'

import Map from "./Map"


class Place extends React.Component {

  state = {
    place: []
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
     console.log(typeof this.state.place.latitud)

    const images = [
      this.state.place.main_photo,
      this.state.place.photo_2
    ]

    return(
      <React.Fragment>
            <h1>{this.state.place.name}</h1>
          <header>
            <ul>
              <a href="/nycplaces">Home</a>
            </ul>
          </header>

          <div className="ui two column grid">
            <div className="column">

          <div className="ui raised very padded text container segment">
          <h2>Information:</h2>
          <h3>{this.state.place.long_description}</h3>
          </div>

        </div>
        <div className="column">
          <div className="slide-container">
            <Slide
             images={ images }
             duration={100000}
             transitionDuration={2000}
           />
          </div>
        </div>
      </div>

      <div className="ui two column grid">
          <div className="column">
          <video src={this.state.place.video} width="800" height="600" autoPlay>
          </video>
        </div>

          <div className="column">
            <h2>Address: </h2>
            <h3>{this.state.place.address}</h3>
            <Map longitud={this.state.place.longitud} latitud={this.state.place.latitud} />
          </div>
        </div>
      </React.Fragment>
      )
    }
  }

export default Place
