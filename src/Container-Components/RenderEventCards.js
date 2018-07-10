import React, { Component, Fragment } from "react"
import { string } from "prop-types"
import EventCard from "../Presentional-Components/EventCard"
import { yelpApiFetcher, corsURL, baseURL, EventsLimitRadiusLocation, EventsDateAndCategories } from "../utils/yelpApiFetcher"

class RenderEventCards extends Component{

  state = { events: [] }

  fetchEvents = (nextProps) => (
    yelpApiFetcher(corsURL+baseURL+EventsLimitRadiusLocation+`${nextProps.zip}`+EventsDateAndCategories)
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

RenderEventCards.propTypes = {
  zip: string
}

export default RenderEventCards
