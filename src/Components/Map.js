import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const Marker = ({ text }) =>
<div>
  <h3>{<img src= {require("./starpin.png")} alt=""/>}</h3>
</div>;

class Map extends Component {

  static defaultProps =  {
    center: {lat: 40.73, lng: -73.93},
      zoom: 14,
  };


  render() {

    const lat = parseFloat(this.props.latitud || "40.75")
    const lng = parseFloat(this.props.longitud || "-73.98")

     // console.log(lat, lng)
    return (
      // Important! Always set the container height explicitly
      <div className="map" style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          center={{lat: lat, lng: lng}}
          bootstrapURLKeys={{ key: "AIzaSyCTgj-dcw-SGZnUcbymLnBU2ppRKp3Uhjg" }}
          zoom={this.props.zoom}
          latitud={this.props.latitud}
          longitud={this.props.longitud}
        >
          <Marker
            lat={this.props.latitud}
            lng={this.props.longitud}
            text={<img src= {require("./starpin.png")} alt=""/>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
