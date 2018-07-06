const yelpApiKey = process.env.REACT_APP_YELP_API_KEY
export const yelpApiFetcher = (url) => fetch(url, {headers: { Authorization: `Bearer ${yelpApiKey}` }})
export const corsURL = "https://cors-anywhere.herokuapp.com/"
export const baseURL = "https://api.yelp.com/v3/"
