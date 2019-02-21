import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Main Components
import { Main, Pizza } from 'components';

// Styles 
// import styles from 'styles/App.module.scss';

export class MainContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    }
  }


  handleClick = (index) => {
    this.setState({
      index: index,
    })
  }


  render() {
    const { index } = this.state;
    const item = {
      0: <div><Main index={index} handleClick={this.handleClick} /></div>,
      1: <div><Pizza index={index} handleClick={this.handleClick} /></div>,
      2: <div><Main index={index} handleClick={this.handleClick} /></div>
    }

    return (item[index]);
  }
}

// function doNotReload(event) {

//   if(event.ctrlKey === true && (event.keyCode === 78 || event.keyCode === 82 || event.keyCode === 116)) {
//     event.keyCode = 0;
//     event.cancelBubble = true;
//     event.returnValue = false;
//   }
// }

export default MainContainer;