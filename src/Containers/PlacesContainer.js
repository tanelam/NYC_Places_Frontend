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
    console.log(event.target)
    this.setState({
      selectedCategory: event.target.value
    })
  }

  // handleChange = (event) => {
  //   console.log(event.target.innerHTML.toLowerCase())
  //   this.setState({
  //     selectedCategory: event.target.innerHTML.toLowerCase()
  //   })
  // }

  handleOnChange = (event) => {
    this.setState({
      input: event.target.value
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

  // filterCategory = () => {
  //   let placesArray = [...this.state.places]
  //   let filteredPlaces = placesArray.filter( place => (place.name).toLowerCase().includes(this.state.input.toLowerCase()))
  //   return filteredPlaces
  // }

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
