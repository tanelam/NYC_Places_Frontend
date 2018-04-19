import React from "react"
import EventCard from "./EventCard"

class Event extends React.Component{

  state = {
    events: []
  }


  fetchEvents = (nextProps) => (

    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?limit=4&radius=2&location=${nextProps.zip}&start_date=1523880000&end_date=1525089600&categories=music,visual-arts,fashion,food-and-drink,festivals-fairs,kids-family`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
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
    // console.log(process.env.REACT_APP_YELP_API_KEY)
    this.setState({
      events: events
    })
  }

  filterEvents() {
    if(this.state.events.events){
       return this.state.events.events.map((event) => {
        return event
    })
    } else {
      return this.state.events
    }
  }

  render(){


     const filteredEvents = this.filterEvents()
      console.log(filteredEvents)
     const filter = filteredEvents.map((event, index) =>
       <EventCard event={event} key={index}/>
     )

    return (
        <React.Fragment>
      {this.state.events.length === 0 ?

          <div className="ui active inverted dimmer">
            <div className="ui huge text loader">Loading</div>
          </div> :
        <div className="ui four cards">
          {filter}
        </div>
      }
    </React.Fragment>
    )
  }

}


export default Event
