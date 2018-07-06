import React, { Component } from "react"
import { NYCplacesApiFetcher, baseURL } from "../utils/NYCplacesApiFetcher"
import PlacesCollection from "../Presentional-Components/PlacesCollection"

class PlacesContainer extends Component {

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
    if(this.state.selectedCategory === "all"){
      return this.state.places
    }
    const places = [...this.state.places]
    return places.filter(place => place.category === this.state.selectedCategory)
  }

  render(){
    // console.log(this.state)
    const filteredCategories = this.filterCategory()
    return(
      <div>
        <PlacesCollection places={filteredCategories}  handleChange={this.handleChange}/>
      </div>
    )
  }
}

export default PlacesContainer
