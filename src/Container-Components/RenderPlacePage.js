import React, { Component } from "react"
import { NYCplacesApiFetcher, baseURL } from "../utils/NYCplacesApiFetcher"
import PlacePage from "../Presentional-Components/PlacePage"

class RenderPlacePage extends Component {

  state = { place: [] }

  fetchPlace = () => (
    NYCplacesApiFetcher(baseURL+`${this.props.match.params.id}`)
    .then(resp => resp.json())
    .then(place => this.handleResponse(place))
  )

  componentDidMount = () => {
    this.fetchPlace()
  }

  handleResponse = (place) => {
    this.setState({ place })
  }

  render(){

    const { main_photo, photo_2, card_photo, name, description, video, long_description, address, latitud, longitud, zip} = this.state.place
    const zipCode = (zip || "10174")

    return(
      <div>
        <PlacePage
          mainPhoto={main_photo}
          photoTwo={photo_2}
          cardPhoto={card_photo}
          name={name}
          description={description}
          placeVideo={video}
          longDescription={long_description}
          address={address}
          longitud={longitud}
          latitud={latitud}
          zip={zipCode}
          />
      </div>
    )
  }
}


export default RenderPlacePage
