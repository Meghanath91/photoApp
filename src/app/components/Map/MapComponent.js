import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
const MapContainer = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  // const [address,setAddress]=useState("")
  // const [map, setMap] = React.useState(null);
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 43.730082,
    lng: -79.2750373,
  };
  useEffect(() => {
    Geocode.setApiKey("AIzaSyBRr3imfTKMqoxRaiPfC7lKHG0Z9KtMBhY");
    Geocode.fromAddress("2233 Eglinton Avenue East").then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(typeof lat, lng);
      setLatitude(lat);
      setLongitude(lng);
    });
  }, [latitude, longitude]);
  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  return latitude && longitude ? (
    <LoadScript googleMapsApiKey="AIzaSyBRr3imfTKMqoxRaiPfC7lKHG0Z9KtMBhY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        // onLoad={onLoad}
      >
        <Marker position={{ lat: Number(latitude), lng: Number(longitude) }} />
      </GoogleMap>
    </LoadScript>
  ) : (
    ""
  );
};

export default MapContainer;
