import React, { Component } from "react";
import { Button } from "./Button";
import LOGO from "./../assests/images/BookItemLogo01.png";

import "./BookItem.css";

export default class BookItem extends Component {
  state = {
    isDownable: false
  };
  render() {
    return (
      <div
        className="BookItemPage"
        onMouseEnter={() => this.setState({ isDownable: true })}
        onMouseLeave={() => this.setState({ isDownable: false })}
      >
        {/* <div className="BookItemLogo"></div> */}
        <div>
          <img
            className="LogoImage"
            src={this.props.logo}
            alt="adsf"
            width="197px"
            height="308px"
          ></img>
          <div className="BookType">FREE EBOOK</div>

          <div className="BookTitle">{this.props.title}</div>

          {this.state.isDownable && (
            <div className="BookItemBtn">
              <a href={this.props.downurl}>
                <Button
                  className="Btn-StartNow"
                  buttonSize="btn-lg"
                  buttonStyle="btn-start"
                >
                  DOWNLOAD
                </Button>
              </a>
            </div>
          )}

          <div className="BookItemBack"></div>
        </div>

        {/* <div className="BookItemInfo">sdfdsfs</div> */}
      </div>
    );
  }
}
