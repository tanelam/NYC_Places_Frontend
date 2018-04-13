import React from "react"

class Event extends React.Component{

  state = {
    events: []
  }


  fetchEvents = () => (
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?limit=2&radius=2&location=${this.props.zip}&start_date=1523880000&end_date=1525089600&categories=music,visual-arts,fashion,food-and-drink,festivals-fairs,kids-family`, {
        headers: {
          Authorization: "Bearer 3GmXb2VUgl0_rI413CrQ7llI71TbMsYpa3_-J21eW3AgQ18qtdNuyUra8KyjTezYx-nPOAvhQDqNKLOhfpSRAA259Uo9aWQcDLLPYGnejKvEEC0XzHYNK9IIzQTDWnYx"
        }
      })
      .then(resp => resp.json())
      .then(events => this.handleResponse(events))
  )

  componentDidMount = () => {
    console.log(this.props.zip)
     this.fetchEvents()
  }

  handleResponse = (events) => {
    this.setState({
      events: events
    })
  }

  filterEvents() {
    if(this.state.events.events){
       return this.state.events.events.map((event) => {
         console.log(event)
      })
    } else {
      return this.state.events
    }
  }


  render(){
    console.log(this.filterEvents());
    return(
      <div>hello</div>
    )
  }

}


export default Event
