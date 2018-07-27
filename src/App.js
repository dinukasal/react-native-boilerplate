import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import Home from "./containers/Home";

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="home"
          component={Home}
          title="Home"
          hideNavBar={true}
          initial
        />
        <Scene key="gray" component={Home} title="Gray" />
      </Scene>
    </Router>
  );
};

export default App;
