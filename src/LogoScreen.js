import React from "react";
import LEFTCORNER from "./assests/images/Left Corner Orange Vector.png";
import RIGHTCORNER from "./assests/images/Right Corner Orange Vector.png";
import LOGO from "./assests/images/Logo.png";
import REPEATGRID from "./assests/images/Repeat Grid.png";
import YOGA from "./assests/images/Yoga.png";
import LOTUS from "./assests/images/Lotus.png";
import MEDITATION from "./assests/images/Meditation.png";
import TABLET from "./assests/images/Tablet.png";
import PLAY from "./assests/images/Play.png";
import "./LogoScreen.css";

class LogoScreen extends React.Component {
  render() {
    return (
      <div className="LogoScreenContainer">
        <img className="Img-LeftCorner" src={LEFTCORNER} alt="leftcorner"></img>
        <img
          className="Img-RightCorner"
          src={RIGHTCORNER}
          alt="rightcorner"
        ></img>
        <img className="Img-Logo" src={LOGO} alt="logo"></img>
        <img className="Img-Grid" src={REPEATGRID} alt="grid"></img>
        <img className="Img-Tablet" src={TABLET} alt="tablet"></img>
        <img className="Img-Yoga" src={YOGA} alt="yoga"></img>
        <img className="Img-Lotus" src={LOTUS} alt="lotus"></img>
        <img className="Img-Meditaion" src={MEDITATION} alt="meditation"></img>
        <img className="Img-Play" src={PLAY} alt="play"></img>
        <p className="LogoText">
          Attract your <span className="GreatestText">greatest</span> desires
          right to your doorstep
        </p>
        <p className="LogoComment">
          Welcome dear one! Below we have created an abundance of knowledge and
          a wide selection of handcrafted step by step instructions to allow you
          to attract your greatest desires. Let’s get stuck in…
        </p>
      </div>
    );
  }
}

export default LogoScreen;
