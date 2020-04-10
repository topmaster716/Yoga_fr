import React, { Component } from "react";
import "./MAudioItem.css";
import PLAY from "../assests/images/SmPlayBtn.svg";
import PAUSE from "../assests/images/SmPauseBtn.svg";

export default class MAudioItem extends Component {
  render() {
    return (
      <div className="MAudioItemContainer">
        <img
          src={this.props.isPlaying ? PAUSE : PLAY}
          width="36px"
          height="36px"
          style={{ marginTop: "auto", marginBottom: "auto" }}
        ></img>
        <p
          className={` MAudioItemTrack ${
            this.props.isPlaying ? "MAudioItemPlaying" : ""
          }`}
        >
          Track - {this.props.track}
        </p>

        <p
          className={`${this.props.isPlaying ? "MAudioItemPlaying" : "hidden"}`}
        >
          Now Playing
        </p>
        {/* {this.props.isPlaying && (
          <p className="MAudioItemPlaying">Now Playing</p>
        )} */}
        <p className="MAudioItemComment">{this.props.comment}</p>
        <p
          className={` MAudioItemLengthNormal ${
            this.props.isPlaying ? "MAudioItemLength" : ""
          }`}
        >
          {this.props.length}
        </p>
      </div>
    );
  }
}
