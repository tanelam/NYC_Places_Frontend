import React from "react"
import EventCard from "./EventCard"

class Event extends React.Component{

  state = {
    events: []
  }


  fetchEvents = (nextProps) => (
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?limit=2&radius=2&location=${nextProps.zip}&start_date=1523880000&end_date=1525089600&categories=music,visual-arts,fashion,food-and-drink,festivals-fairs,kids-family`, {
        headers: {
          Authorization: ""
        }
      })
      .then(resp => resp.json())
      .then(events => this.handleResponse(events))
  )

  componentWillReceiveProps(nextProps){
    // console.log(this.props.zip, nextProps)
    if(this.props.zip !== nextProps.zip){
      this.fetchEvents(nextProps)
    }
  }

  handleResponse = (events) => {
    this.setState({
      events: events
    })
  }

  filterEvents() {
    if(this.state.events.events){
       return this.state.events.events.map((event) => {
        return event
          // console.log(event);
          // console.log(event.description)
          // console.log(event.name);
          // console.log(event.time_start)
          // console.log(event.time_end)
          // console.log(event.location.address1)
          // console.log(event.image_url);
    })
    } else {
      return this.state.events
    }
  }

  render(){
     const filteredEvents = this.filterEvents()
     // console.log(filteredEvents)
     const filter = filteredEvents.map((event, index) =>
       <EventCard event={event} key={index}/>
     )
     // console.log(typeof filter)
    return (
      <div className="ui two cards">
        {filter}
      </div>
    )
  }

}


export default Event
