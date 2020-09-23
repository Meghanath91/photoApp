import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/profile.json";
import "./loading.scss";
//home page animation
const Loading = (props) => {
  const { height, width } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loading-container">
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};
export default Loading;
