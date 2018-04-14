import React from "react"

import PlacesCollection from "./PlacesCollection"

import Login from "../Components/Login"


class PlacesContainer extends React.Component{

  state = {
    places: [],
    selectedCategory: "all"
  }

  fetchPlaces = () => (
    fetch("http://localhost:8000/places")
    .then(resp => resp.json())
    .then(places => this.handleResponse(places))
  )

  componentDidMount = () => {
    this.fetchPlaces()
  }

  handleResponse = (places) => {
    this.setState({
      places: places
    })
  }

  handleChange = (event) => {
    this.setState({
      selectedCategory: event.target.value
    })
  }

  filterCategory = () => {
    if(this.state.selectedCategory === "all"){
      return this.state.places
    }else{
      const places = [...this.state.places]
      return places.filter(place => place.category === this.state.selectedCategory)
    }
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
