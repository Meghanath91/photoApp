import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const MapContainer = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBRr3imfTKMqoxRaiPfC7lKHG0Z9KtMBhY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker key={1} position={{ lat: 41.4055, lng: 2.1915 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
