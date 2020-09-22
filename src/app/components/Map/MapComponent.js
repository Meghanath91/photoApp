import React, { useState, useEffect } from "react";
import "./map.scss";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
const MapContainer = ({ address }) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API;
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  // const mapStyles = {
  //   height: "50vh",
  //   width: "50%",
  //   borderRadius: "25px",
  // };

  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };
  useEffect(() => {
    Geocode.setApiKey(API_KEY);
    Geocode.fromAddress(address).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;

      setLatitude(Number(lat));
      setLongitude(Number(lng));
    });
  }, [latitude, longitude]);

  return latitude && longitude ? (
    <LoadScript googleMapsApiKey="AIzaSyBRr3imfTKMqoxRaiPfC7lKHG0Z9KtMBhY">
      <GoogleMap
        // mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        id="map-container"
      >
        <Marker
          position={{ lat: latitude, lng: longitude }}
          setLabel={address}
        />
      </GoogleMap>
    </LoadScript>
  ) : (
    ""
  );
};

export default MapContainer;
