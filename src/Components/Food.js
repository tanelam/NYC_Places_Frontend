import React from "react"
import FoodCard from "./FoodCard"

class Food extends React.Component{

  state = {
    food: []
  }


  fetchFoods = (nextProps) => (

    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${nextProps.zip}&limit=4&categories=food`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
        }
      })
      .then(resp => resp.json())
      .then(food => this.handleResponse(food))
  )

  componentWillReceiveProps(nextProps){
    console.log(this.props.zip, nextProps)
    if(this.props.zip !== nextProps.zip){
      this.fetchFoods(nextProps)
    }
  }

  handleResponse = (food) => {
    // console.log(process.env.REACT_APP_YELP_API_KEY)
    this.setState({
      food: food
    })
  }
  //
  filterFoods() {
    if(this.state.food.businesses){
       return this.state.food.businesses.map((food) => {
        return food
    })
    } else {
      return this.state.food
    }
  }

  render(){

     const filteredFoods = this.filterFoods()
      console.log(filteredFoods)
     const filter = filteredFoods.map((food, index) =>
       <FoodCard food={food} key={index}/>
     )

     // {this.state.food.length === 0 ?
     //
     //     <div className="ui active inverted dimmer">
     //       <div className="ui huge text loader">Loading</div>
     //     </div> :
     //   <div className="ui four cards">
     //     {filter}
     //   </div>
     // }

    return (
      <React.Fragment>
        <div className="ui four raised cards">
          {filter}
        </div>
      </React.Fragment>
    )
  }

}


export default Food
