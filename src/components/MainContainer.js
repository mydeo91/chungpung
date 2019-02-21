import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Main Components
import { Main, Pizza, NotFound } from 'components';

// Styles 
import styles from 'styles/App.module.scss';

export class MainContainer extends Component {

  render() {
    return (
      <Router basename="/chungpung">
        <div className={styles.contentbox}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/pizza" component={Pizza} />
            {/* <Route exact path="/guestHouse" component={Main} />
            <Route exact path="/strongFire" component={Main} />
            <Route exact path="/service" component={Main} />
            <Route exact path="/news" component={Main} /> */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainContainer;