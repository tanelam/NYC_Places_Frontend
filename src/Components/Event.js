import React, { Fragment } from "react"
import EventCard from "./EventCard"

const yelpApiKey = process.env.REACT_APP_YELP_API_KEY

class Event extends React.Component{

  state = { events: [] }

  fetchEvents = (nextProps) => (
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?limit=4&radius=2&location=${nextProps.zip}&start_date=1527645110&end_date=1527645110&categories=music,visual-arts,fashion,food-and-drink,festivals-fairs,kids-family`, {
        headers: {
          Authorization: `Bearer ${yelpApiKey}`
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
    this.setState({ events })
  }

  filterEvents() {
    if(this.state.events.events){
      return this.state.events.events.map( (event) => event)
    }
    return this.state.events
  }

  render(){
    // console.log(this.state.events)
    // console.log(filteredEvents)
     const filteredEvents = this.filterEvents()
     const filter = filteredEvents.map((event, index) =>
       <EventCard event={event} key={index}/>
     )

    return (
      <Fragment>
        {this.state.events.length === 0 ?
            <div className="ui active inverted dimmer">
              <div className="ui huge text loader">Loading</div>
            </div> :
          <div className="ui four raised cards">
            {filter}
          </div>
        }
      </Fragment>
    )
  }

}


export default Event
