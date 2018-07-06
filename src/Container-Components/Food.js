import React, { Component, Fragment } from "react"
import { yelpApiFetcher, corsURL, baseURL } from "../utils/yelpApiFetcher"
import FoodCard from "../Presentional-Components/FoodCard"

class Food extends Component{

  state = { food: [] }

  fetchFoods = (nextProps) => (
    yelpApiFetcher(corsURL+baseURL+`businesses/search?location=${nextProps.zip}&limit=4&categories=food`)
    .then(resp => resp.json())
    .then(food => this.handleResponse(food))
  )

  componentWillReceiveProps(nextProps){
    // console.log(this.props.zip, nextProps)
    if(this.props.zip !== nextProps.zip){
      this.fetchFoods(nextProps)
    }
  }

  handleResponse = (food) => {
    this.setState({ food })
  }

  filterFoods() {
    if(this.state.food.businesses){
       return this.state.food.businesses.map((food) => food )
    }
    return this.state.food
  }

  render(){
    // console.log(this.state.food)
     const filteredFoods = this.filterFoods()
      // console.log(filteredFoods)
     const filter = filteredFoods.map((food, index) =>
       <FoodCard food={food} key={index}/>
     )

    return (
      <Fragment>
        <div className="ui four raised cards">
          {filter}
        </div>
      </Fragment>
    )
  }

}


export default Food
