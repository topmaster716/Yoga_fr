import React, { Component } from "react";
import MVPlayItem from "./MVPlayItem";
import "./MVPlayerList.css";

export default class MVPlayerList extends Component {
  render() {
    return (
      <div className="MVPlayerListPage">
        <div className="MVPHeader">Recent uploads</div>
        <div className="MVPItems">
          <MVPlayItem />
          <MVPlayItem />
          <MVPlayItem />
          <MVPlayItem />
          <MVPlayItem />
        </div>
      </div>
    );
  }
}
