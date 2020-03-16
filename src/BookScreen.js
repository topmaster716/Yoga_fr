import React from "react";
import LOGO from "./assests/images/Logo.png";
import "./BookScreen.css";

class BookScreen extends React.Component {
  render() {
    return (
      <div className="BookScreenPage">
        <div className="BookScreenContainer">
          <div className="BookScreenTitle">
            <p className="TitleText">
              Multimedia <span className="StrongText">eBooks</span>
            </p>
          </div>
        </div>

        <div
          className="FooterContainer"
          style={{ display: "flex", flexDirection: "col" }}
        >
          <div className="FooterLogo" style={{ flexGrow: "4" }}>
            <img className="Img-Logo" src={LOGO} alt="logo"></img>
          </div>
          <div className="FooterSection" style={{ flexGrow: "2" }}>
            <a className="FooterItem">Introductions</a>
            <a className="FooterItem">Videos</a>
            <a className="FooterItem">Audio</a>
            <a className="FooterItem">Ebooks</a>
          </div>
          <div className="FooterCopyright" style={{ flexGrow: "4" }}>
            <p>
              <span className="CopyMark">© </span> All right reserved 2020
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BookScreen;
