import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Row, Col, grid } from "react-bootstrap";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import logo from "./tomatologo.png";
//import "./Authentication.css";
import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";

export default class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
    this.goBack = this.goBack.bind(this);
  }

  goBack = () => {
    this.setState({
      activeIndex: 0
    });
  };

  renderContent = () => {
    if (this.state.activeIndex == 0) {
      return (
        <div className="row">
          <div className="col-sm-2 offset-3">
            <div className="container">
              <Button
                bsSize="large"
                bsStyle="info"
                onClick={() => this.onSignUp()}
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="container">
              <Button
                bsSize="large"
                bsStyle="info"
                onClick={() => this.onSignIn()}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeIndex == 1) {
      return <SignUpForm goBack={this.goBack} />;
    } else if (this.state.activeIndex == 1) {
      return <SignUpForm goBack={this.goBack} />;
    } else {
      return <SignInForm goBack={this.goBack} />;
    }
  };

  onSignUp = () => {
    this.setState({
      activeIndex: 1
    });
  };

  onSignIn = () => {
    this.setState({
      activeIndex: 2
    });
  };

  render() {
    return (
      <div>
        <div>
          <header className="Header">
            <img src={logo} className="tomato-logo" alt="logo" />
          </header>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}
