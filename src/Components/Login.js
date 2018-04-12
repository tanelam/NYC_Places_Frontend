import React from "react"

class Login extends React.Component{

  state={
    username: "",
    password: ""
  }

  handleSubmit = (event) => {
    this.preventDefault()
    console.log(event.target.value)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Username" value={this.state.username}/>
        <input type="password" placeholder="Password" value={this.state.password}/>
        <input type="submit"/>
      </form>
    )
  }
}

export default Login
