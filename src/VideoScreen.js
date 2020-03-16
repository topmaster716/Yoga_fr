import React from "react";
import "./VideoScreen.css";

class VideoScreen extends React.Component {
  render() {
    return (
      <div className="VideoScreenPage">
        <div className="VideoScreenContainer">
          <div className="VideoScreenTitle">
            <p className="TitleText">
              Multimedia <span className="StrongText">Video</span>
            </p>
          </div>
          <div className="VideoScreenSection">
            <div className="LeftPane"></div>

            <div className="RightPane">
              <div className="VideoControl"></div>
              <div className="VideoInfo"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoScreen;
