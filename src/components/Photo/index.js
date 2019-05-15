import React, { Component } from "react";

class Photo extends Component {
  render() {
    return <img src={require("../../images/room01.jpg")} style={{width: '100%'}}/>;
  }
}

export default Photo;
