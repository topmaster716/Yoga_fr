import React from "react";
import MVPlayerList from "./components/MVPlayerList";
// import Vimeo from "react-vimeo";
// import VideoPlayer from "react-videoplayer";
// import "react-videoplayer/lib/index.css";

// import "video-react/dist/video-react.css";

import "video-react/dist/video-react.css";
import { Player } from "video-react";
import "./VideoScreen.css";

class VideoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4"
    };
  }

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
            <div className="LeftPane">
              <MVPlayerList></MVPlayerList>
            </div>

            <div className="RightPane">
              <div className="VideoInfo">
                {/* <VideoPlayer
                  videoSrc={this.state.videoSrc}
                  autoPlay={true}
                  width="100px"
                /> */}
                <Player
                  playsInline
                  poster="/assets/poster.png"
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  fluid={false}
                  width="100%"
                  height={500}
                />
              </div>
              <div className="VideoTitle">
                Hatha Flow Yoga For Beginners (30-min) Discover the Hatha Yoga
                Style (All Levels) Full Class
              </div>
              <div className="VideoLength">Length: 30 min. </div>
              <div className="VideoComment">
                <p>
                  Discover Hatha yoga! Today's 30 minute full class is ideal for
                  beginners and those of you looking for a more mindful
                  practice. We'll strengthen and stretch the body, holding each
                  pose for several breaths.
                </p>
                <p>
                  Hatha yoga tends to be gentler and slower-paced than a Vinyasa
                  or Power style class (the type of yoga which we'll explore
                  tomorrow). If you’re new to yoga, recovering from an injury,
                  or are looking to de-stress by moving slowly and mindfully,
                  this style of yoga may be the perfect fit for you. Optional
                  Props: Two Yoga Blocks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoScreen;
