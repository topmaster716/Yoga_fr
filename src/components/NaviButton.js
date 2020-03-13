import React from "react";
import "./NaviButton.css";
import { findByLabelText } from "@testing-library/react";

class NaviButton extends React.Component {
  render() {
    return (
      <div className="NaviButton-Container" style={{ display: "flex" }}>
        <div
          className="Icon"
          style={{
            backgroundImage: `url(${this.props.img_vector})`,
            width: "63px",
            height: "73px",
            display: "flex"
          }}
        >
          <img
            src={this.props.img_image}
            style={{ margin: "auto" }}
            alt="Vector"
          ></img>
        </div>
        <div className="Text">{this.props.children}</div>
      </div>
    );
  }
}

export default NaviButton;
