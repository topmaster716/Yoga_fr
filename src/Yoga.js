import React from "react";
import LogoScreen from "./LogoScreen";
import VideoScreen from "./VideoScreen";
import AudioScreen from "./AudioScreen";
import BookScreen from "./BookScreen";

import "./Yoga.css";

class Yoga extends React.Component {
  render() {
    return (
      <div>
        <LogoScreen></LogoScreen>
        <VideoScreen></VideoScreen>
        <AudioScreen></AudioScreen>
        <BookScreen></BookScreen>
      </div>
    );
  }
}

export default Yoga;
