import React, { Component } from "react";
import { comic } from "../actions";

//import { Button } from "./buttonComponent";
// App.js
export class Comic extends Component {
  render() {
    return (
      <div>
        <img src={comic.src} alt="" />
      </div>
    );
  }
}
