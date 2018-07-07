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

    const zipCode = (this.state.place.zip || "10174")

    return(
      <div>
        <PlacePage place={this.state.place} zip={zipCode}/>
      </div>
    )
  }
}

export default RenderPlacePage
