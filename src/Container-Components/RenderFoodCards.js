import React, { Component, Fragment } from "react"
import { yelpApiFetcher, corsURL, baseURL, FoodPlacesLocation, FoodPlacesLimitAndCategories } from "../utils/yelpApiFetcher"
import FoodCard from "../Presentional-Components/FoodCard"

class RenderFoodCards extends Component{

  state = { foodPlaces: [] }

  fetchFoodPlaces = (nextProps) => (
    yelpApiFetcher(corsURL+baseURL+FoodPlacesLocation+`${nextProps.zip}`+FoodPlacesLimitAndCategories)
    .then(resp => resp.json())
    .then(foodPlaces => this.handleResponse(foodPlaces))
  )

  componentWillReceiveProps(nextProps){
    // console.log(this.props.zip, nextProps)
    if(this.props.zip !== nextProps.zip){
      this.fetchFoodPlaces(nextProps)
    }
  }

  handleResponse = (foodPlaces) => {
    this.setState({ foodPlaces })
  }

  filterFoodPlaces() {
    const { foodPlaces } = this.state

    if(foodPlaces.businesses){
      return foodPlaces.businesses.map(foodPlace => foodPlace)
    }
    return foodPlaces
  }

  render(){

    const filteredFoodPlaces = this.filterFoodPlaces()
    const recommendedFoodPlaces = filteredFoodPlaces.map((foodPlace, index) => <FoodCard place={foodPlace} key={index}/>)

    return (
      <Fragment>
        <div className="ui four raised cards">
          {recommendedFoodPlaces}
        </div>
      </Fragment>
    )
  }

}


export default RenderFoodCards
