import React, { Component } from "react";
import PRVIMG from "./../assests/images/VideoPreview01.jpg";
import "./MVPlayItem.css";

export default class MVPlayItem extends Component {
  render() {
    return (
      <div className="MVPlayItemPage">
        <div className="ItemPreview">
          <img className="PreviewImg" src={PRVIMG} alt="preview"></img>
          <p id="ItemLength">10:02</p>
        </div>
        <div className="ItemComment">
          Yoga for neck, shoulders and upper back 15min
        </div>
      </div>
    );
  }
}
