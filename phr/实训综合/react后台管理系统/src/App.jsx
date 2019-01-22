import React, { Component } from 'react';
import "./App.css";
import Router from "./router";
import store from "./store";
import {Provider} from "react-redux";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
