import React from "react";
import { useLocation } from "react-router-dom";
import "./profile.scss";
import MapContainer from "../../components/Map/MapComponent";
//this is responsible for displaying profile
export default function Profile() {
  //to get data from login page
  const location = useLocation();
  const { username, address } = location.state.params;

  return (
    <div className="profile-container">
      <div className="img-name-container">
        <img className="avatar" src="/assets/pic.png" alt="avatar" />
        {username ? <h1>{username}</h1> : ""}
      </div>

      <MapContainer address={address} />
    </div>
  );
}
