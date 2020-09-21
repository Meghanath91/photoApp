import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MapContainer from "../../components/Map/MapComponent";
export default function Profile() {
  // const [username, setUsername] = useState("");
  // const [avatar, setAvatar] = useState("");
  // const [address, setAddress] = useState("");
  //to get the data from bookingForm
  const location = useLocation();
  const { username, address, image } = location.state.params;
  console.log(location.state.params);
  // useEffect(() => {
  //   setUsername();
  // }, [username, avatar, address]);
  return (
    <>
      {" "}
      <img src="/assets/pic.png" alt="avatar" />
      {username ? <h1>{username}</h1> : ""}
      <MapContainer address={address} />
    </>
  );
}
