import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./MAudioPlayer.css";
import PLAY from "../assests/images/AudioPlayBtn.svg";
import PAUSE from "../assests/images/AudioPauseBtn.svg";
import PREVIOUS from "../assests/images/AudioPrevBtn.svg";
import NEXT from "../assests/images/AudioNextBtn.svg";
import REPEAT from "../assests/images/AudioRepeatBtn.svg";
import RANDOM from "../assests/images/AudioRandomBtn.svg";

export default class MAudioPlayer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="MAudioPlayerContainer">
        <img
          src={this.props.logo}
          alt="logo"
          width="175px"
          height="126px"
          style={{ borderRadius: 5 }}
        ></img>
        <p className="MAudioPlayerTrack">Track - {this.props.track}</p>
        <p className="MAudioPlayerComment">{this.props.comment}</p>
        <AudioPlayer
          autoPlay={false}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          showSkipControls={true}
          style={{ backgroundColor: "#F1F1F1" }}
          customIcons={{
            play: <img src={PLAY} alt="logo" width="100%"></img>,
            pause: <img src={PAUSE} alt="logo" width="100%"></img>,
            previous: <img src={PREVIOUS} alt="logo" width="100%"></img>,
            next: <img src={NEXT} alt="logo" width="100%"></img>
            // loop: <img src={REPEAT} alt="logo" width="100%"></img>
          }}
        />
      </div>
    );
  }
}
