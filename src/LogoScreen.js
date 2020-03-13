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
import NAVVIDVEC from "./assests/images/NaviVideo01.svg";
import NAVVIDIMG from "./assests/images/NaviVideo02.svg";
import NAVAUDVEC from "./assests/images/NaviAudio01.svg";
import NAVAUDIMG from "./assests/images/NaviAudio02.svg";
import "./LogoScreen.css";
import { Button } from "./components/Button";
import NaviButton from "./components/NaviButton";

class LogoScreen extends React.Component {
  render() {
    return (
      <div
        className="LogoScreenContainer"
        style={{ display: "flex", flexDirection: "col" }}
      >
        <div className="LeftContainer">
          <img
            className="Img-LeftCorner"
            src={LEFTCORNER}
            alt="leftcorner"
          ></img>

          <div className="LogoContainer">
            <img className="Img-Logo" src={LOGO} alt="logo"></img>

            <p className="LogoText">
              Attract your <span className="GreatestText">greatest</span>{" "}
              desires right to your doorstep
            </p>
            <p className="LogoComment">
              Welcome dear one! Below we have created an abundance of knowledge
              and a wide selection of handcrafted step by step instructions to
              allow you to attract your greatest desires. Let’s get stuck in…
            </p>
            <Button
              className="Btn-StartNow"
              buttonSize="btn-lg"
              buttonStyle="btn-start"
            >
              START NOW
            </Button>
            <div className="ButtonContainer">
              <NaviButton img_vector={NAVVIDVEC} img_image={NAVVIDIMG}>
                Watch Videos
              </NaviButton>
              <NaviButton img_vector={NAVAUDVEC} img_image={NAVAUDIMG}>
                Start listening
              </NaviButton>
            </div>
          </div>
        </div>
        <div className="RightContainer">
          <img
            className="Img-RightCorner"
            src={RIGHTCORNER}
            alt="rightcorner"
          ></img>
          <img className="Img-Grid" src={REPEATGRID} alt="grid"></img>
          <img className="Img-Tablet" src={TABLET} alt="tablet"></img>
          <img className="Img-Yoga" src={YOGA} alt="yoga"></img>
          <img className="Img-Lotus" src={LOTUS} alt="lotus"></img>
          <img
            className="Img-Meditaion"
            src={MEDITATION}
            alt="meditation"
          ></img>
          <img className="Img-Play" src={PLAY} alt="play"></img>{" "}
        </div>
      </div>
    );
  }
}

export default LogoScreen;
