import React from "react";
import LogoScreen from "./LogoScreen";
import VideoScreen from "./VideoScreen";
import AudioScreen from "./AudioScreen";
import BookScreen from "./BookScreen";
import LEFTBACK from "./assests/images/Back01.svg";
import RIGHTBACK from "./assests/images/Back02.svg";

import "./Yoga.css";

class Yoga extends React.Component {
  handleHamburgerClick(e) {
    alert("sdf");
  }

  render() {
    return (
      <div>
        {/* <div className="MobileMenu" style={{ display: "flow" }}>
          <div className="MobileLeftCorner">
            
          </div>
          <div className="MobileMenuTitle">MENU</div>

          <nav className="MobileNavMenu" style={{ margin: "auto" }}>
            <ul
              style={{
                listStyleType: "none",
                margin: "auto",
                paddingLeft: "0"
              }}
            >
              <li>
                <a className="MobileMenuItem">Introductions</a>
              </li>
              <li>
                <a className="MobileMenuItem">Videos</a>
              </li>
              <li>
                <a className="MobileMenuItem">Audio</a>
              </li>
              <li>
                <a className="MobileMenuItem">eBooks</a>
              </li>
            </ul>
          </nav>
          <div className="MobileRightCorner">
          </div>
        </div> */}
        <LogoScreen></LogoScreen>
        <VideoScreen></VideoScreen>
        <AudioScreen></AudioScreen>
        <BookScreen></BookScreen>
      </div>
    );
  }
}

export default Yoga;
