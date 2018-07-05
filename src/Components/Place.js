import React from "react"
import { Slide } from 'react-slideshow-image';
import Event from "./Event"
import Map from "./Map"
import Food from "./Food"

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

  render(){
    const images = [
      this.state.place.main_photo,
      this.state.place.photo_2
    ]

    const zip = (this.state.place.zip || "10174")

    return(
      <React.Fragment>

      <div className="ui secondary pointing massive menu">
        <a className="active grey item" href="/nycplaces">
          NYC Places
        </a>
      </div>

      <div className="ui container">
        <div className="ui large header">

            <h1 className="ui grey large header">
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
              <p> </p>
              <h3 className="ui grey header">{this.state.place.long_description}</h3>

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
            <Event zip={zip}/>
          </div>
        </div>

          <div className="ui two column grid">
            <div className="column">
              <br/>
              <h2 className="ui grey header">Address: </h2>
              <h3 className="ui grey header">{this.state.place.address}</h3>
            </div>
            <div className="right aligned column">
              <br/>
              <p className="ui grey huge header">{this.state.place.latitud}</p>
              <p className="ui grey huge header">{this.state.place.longitud}</p>
            </div>
          </div>

          <div className="ui one column grid">
            <div className="column">
              <Map longitud={this.state.place.longitud} latitud={this.state.place.latitud} />
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
            <Food zip={zip}/>
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
