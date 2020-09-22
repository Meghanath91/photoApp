import React from "react";
import "./profile.scss";
import { useLocation } from "react-router-dom";
import MapContainer from "../../components/Map/MapComponent";
export default function Profile() {
  const location = useLocation();
  const { username, address, image } = location.state.params;

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
