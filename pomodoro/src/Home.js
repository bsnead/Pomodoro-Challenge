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
      user: null,
      updated: false
    };
  }

  //issue because componentDidMount() gets called after render
  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
    this.authListener();
  }


  test() {
    return this.state.user ? <App /> : <Authentication />;
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user, updated: true });
      } else {
        this.setState({ user: null, updated: true });
      }
    });
  }

  render() {
    console.log("render");
    if (this.state.updated) {
      return this.test();
    }
    else {
      return null;
    }
  }
}
