import React, { Fragment } from "react"
import FoodCard from "./FoodCard"

const yelpApiKey = process.env.REACT_APP_YELP_API_KEY

class Food extends React.Component{

  state = { food: [] }

  fetchFoods = (nextProps) => (
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${nextProps.zip}&limit=4&categories=food`, {
        headers: {
          Authorization: `Bearer ${yelpApiKey}`
        }
      })
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
    // console.log(process.env.REACT_APP_YELP_API_KEY)
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
