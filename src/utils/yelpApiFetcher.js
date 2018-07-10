const yelpApiKey = process.env.REACT_APP_YELP_API_KEY
export const yelpApiFetcher = (url) => fetch(url, {headers: { Authorization: `Bearer ${yelpApiKey}` }})
export const corsURL = "https://cors-anywhere.herokuapp.com/"
export const baseURL = "https://api.yelp.com/v3/"

//EventsTimeStamp
const TimeStamp = Math.round(new Date().getTime()/1000.0)

//EventsURL's
export const EventsLimitRadiusLocation = "events?limit=4&radius=2&location="
export const EventsDateAndCategories = `&start_date=${TimeStamp}&end_date=${TimeStamp}&categories=music,visual-arts,fashion,food-and-drink,festivals-fairs,kids-family`

//FoodPlacesURL's
export const FoodPlacesLocation = "businesses/search?location="
export const FoodPlacesLimitAndCategories = "&limit=4&categories=food"
