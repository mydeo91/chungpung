import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import PageContainer from "./page";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header {...this.props} />
          <PageContainer />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
