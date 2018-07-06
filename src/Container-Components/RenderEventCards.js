import React, { Component, Fragment } from "react"
import { yelpApiFetcher, corsURL, baseURL } from "../utils/yelpApiFetcher"
import EventCard from "../Presentional-Components/EventCard"

class RenderEventCards extends Component{

  state = { events: [] }


  fetchEvents = (nextProps) => (
    yelpApiFetcher(corsURL+baseURL+`events?limit=4&radius=2&location=${nextProps.zip}&start_date=1527645110&end_date=1527645110&categories=music,visual-arts,fashion,food-and-drink,festivals-fairs,kids-family`)
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
    const { events } = this.state

    if(events.events){
      return events.events.map(event => event)
    }
    return events
  }

  render(){

    const filteredEvents = this.filterEvents()
    const recommendedEvents = filteredEvents.map((event, index) => <EventCard event={event} key={index}/>)

    return (
      <Fragment>
        {this.state.events.length === 0 ?
            <div className="ui active inverted dimmer">
              <div className="ui huge text loader">Loading</div>
            </div> :
          <div className="ui four raised cards">
            {recommendedEvents}
          </div>
        }
      </Fragment>
    )
  }

}


export default RenderEventCards