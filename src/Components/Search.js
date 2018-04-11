import React from "react"

class Search extends React.Component{

    render(){
      return(
        <div>
          <form>
            <input type="text" onChange={this.props.handleOnChange} value={this.props.input}/>
          </form>
        </div>
      )
    }
}

export default Search
