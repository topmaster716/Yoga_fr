import React from "react";
import "./AudioScreen.css";

class AudioScreen extends React.Component {
  render() {
    return (
      <div className="AudioScreenPage">
        <div className="AudioScreenContainer">
          <div className="AudioScreenTitle">
            <p className="TitleText">
              Multimedia <span className="StrongText">Audio</span>
            </p>
          </div>
          <div className="AudioScreenSection">
            <div className="PlayPane"></div>
            <div className="ListPane"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AudioScreen;
