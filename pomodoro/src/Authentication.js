import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import { Button, Row, Col, grid } from "react-bootstrap";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Background from "./assets/desk2.jpg";
import logo from "./tomatologo.png";
import "./Authentication.css";
import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";

export default class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
    this.goBack = this.goBack.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
  }

  goBack = () => {
    this.setState({
      activeIndex: 0
    });
  };
  goToSignUp = () => {
    this.setState({
      activeIndex: 1
    });
  };

  renderContent = () => {
    if (this.state.activeIndex == 0) {
      return <SignInForm goToSignUp={this.goToSignUp} />;
    } else if (this.state.activeIndex == 1) {
      return <SignUpForm goBack={this.goBack} />;
    } else {
      return <SignInForm goBack={this.goBack} goToSignUp={this.goToSignUp} />;
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
      <section
        style={{
          backgroundImage: `url(${Background})`,
          height: 1000,
          width: "100%",
          backgroundSize: "cover",
          overflow: "hidden"
        }}
      >
        <div className="boxStyle" style={{ width: "70%", textAlign: "center" }}>
          <img src={logo} className="tomatologo" alt="logo" />
          <div className="row">
            <div className="col-sm-12 centered">{this.renderContent()}</div>
          </div>
        </div>
      </section>
    );
  }
}
