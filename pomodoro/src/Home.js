import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Authentication from "./Authentication";
import App from "./App";
import fire from "./fire";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  //issue because componentDidMount() gets called after render
  componentDidMount() {
    this.authListener();
  }

  test() {
    return this.state.user ? <App /> : <Authentication />;
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return this.test();
  }
}
