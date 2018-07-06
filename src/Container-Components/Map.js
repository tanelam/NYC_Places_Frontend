import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../Presentional-Components/MapMarker"
import "../App.css"

class Map extends Component {

  static defaultProps =  {
    center: {lat: 40.73, lng: -73.93},
    zoom: 14,
  };

  render() {

    const lat = parseFloat(this.props.latitud || "40.75")
    const lng = parseFloat(this.props.longitud || "-73.98")
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

    return (

      <div className="map">
        <GoogleMapReact
          center={{lat: lat, lng: lng}}
          bootstrapURLKeys={{ key: `${googleMapsApiKey}` }}
          zoom={this.props.zoom}
          latitud={this.props.latitud}
          longitud={this.props.longitud}
        >
          <Marker
            lat={this.props.latitud}
            lng={this.props.longitud}
          />
        </GoogleMapReact>
      </div>

    )
  }

}

export default Map;
