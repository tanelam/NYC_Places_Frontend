import React from "react"

class HeroImage extends React.Component{
    render(){
      return(
        <div className="ui three column grid">
          <div className="column"></div>
          <div className="column"></div>
          <div className="center aligned column">
            <img src={require("./nyc.png")} height="100" alt=""/>
            <h1 className="ui grey header">Welcome to NYC</h1>
          </div>
        </div>
      )
    }
}

export default HeroImage
