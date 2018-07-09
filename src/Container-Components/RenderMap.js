import React, { Component } from 'react';
import { number, string } from "prop-types"
import GoogleMapReact from 'google-map-react';
import Marker from "../Presentional-Components/MapMarker"
import "../App.css"

class RenderMap extends Component {

  static defaultProps =  {
    center: {lat: 40.73, lng: -73.93},
    zoom: 14,
  };

  render() {

    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const { zoom, latitud, longitud } = this.props
    const lat = parseFloat(latitud || "40.75")
    const lng = parseFloat(longitud || "-73.98")

    return (

      <div className="map">
        <GoogleMapReact
          center={{lat, lng}}
          bootstrapURLKeys={{ key: `${googleMapsApiKey}` }}
          zoom={zoom}
          latitud={latitud}
          longitud={longitud}
        >
          <Marker
            lat={latitud}
            lng={longitud}
          />
        </GoogleMapReact>
      </div>

    )
  }
}

RenderMap.propTypes = {
  zoom: number,
  latitud: string,
  longitud: string
}

export default RenderMap;
