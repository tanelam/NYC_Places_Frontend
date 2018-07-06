import React, { Component } from "react"
import { NYCplacesApiFetcher, baseURL } from "../utils/NYCplacesApiFetcher"
import PlacesGallery from "../Presentional-Components/PlacesGallery"

class RenderPlacesGallery extends Component {

  state = { places: [], selectedCategory: "all" }

  fetchPlaces = () => (
    NYCplacesApiFetcher(baseURL)
    .then(resp => resp.json())
    .then(places => this.handleResponse(places))
  )

  componentDidMount = () => {
    this.fetchPlaces()
  }

  handleResponse = (places) => {
    this.setState({ places })
  }

  handleChange = (event) => {
    this.setState({ selectedCategory: event.target.value })
  }

  filterCategory = () => {
    const { selectedCategory, places } = this.state

    if(selectedCategory === "all"){
      return places
    }
    const placesCopy = [...places]
    return placesCopy.filter(place => place.category === selectedCategory)
  }

  render(){
    // console.log(this.state)
    const filteredCategories = this.filterCategory()
    return(
      <div>
        <PlacesGallery places={filteredCategories}  handleChange={this.handleChange}/>
      </div>
    )
  }
}

export default RenderPlacesGallery
