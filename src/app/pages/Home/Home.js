import React from "react";
import Loading from "../../components/Loading/Loading";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <Loading />
      <div className="caption">
        <h1>CREATE</h1>
        <h1>PROFILE</h1>
      </div>
    </div>
  );
}
