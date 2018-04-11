import React from "react"

class HeroImage extends React.Component{
    render(){
      return(
        <div >
          <img src="https://images.pexels.com/photos/7613/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  height="600" class="hero-image"/>
          <div class="hero-text">
            <h1>Welcome to NYC</h1>
          </div>
        </div>
      )
    }
}

export default HeroImage
