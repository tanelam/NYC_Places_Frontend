import React from "react"

class FoodCard extends React.Component{

  render(){
     // console.log(this.props.food === [])
    return(
    <React.Fragment>
      <div className="card">
        <a className="image" href={this.props.food.url} target="_blank">
          {this.props.food.image_url !== "" ?
            <img src={this.props.food.image_url} alt="" /> :
            <img src={require("./eventImage.png")} alt="" />}
        </a>
        <div className="content">
          <a className="ui grey header" href={this.props.food.url} target="_blank">{this.props.food.name}</a>
          <div className="description">
            {this.props.food.location.display_address}
          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}


export default FoodCard
