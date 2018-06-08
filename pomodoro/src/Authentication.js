import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import "./Authentication.css";
import { Button, Row, Col, grid } from "react-bootstrap";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

import SvgIcon from "@material-ui/core/SvgIcon";
import Background from "./assets/desk2.jpg";
import logo from "./tomatologo.png";

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
        <section
          style={{
            backgroundImage: `url(${Background})`,
            height: 1000,
            width: "100%",
            backgroundSize: "cover",
            overflow: "hidden"
          }}
        >
          <div
            className="boxStyle"
            style={{ width: "70%", textAlign: "center" }}
          >
            <img src={logo} className="tomatologo" alt="logo" />
            <div className="row">
              <div className="col-sm-12 centered">{this.renderContent()}</div>
            </div>
          </div>
        </section>
        <div style={{ backgroundColor: "#ba000d" }}>
          <div className="content">
            <div>
              <h1 style={{ color: "#ffffff" }}>What Is the Pomodoro Timer?</h1>
              <hr
                style={{
                  backgroundColor: "#009688",
                  width: "50%",
                  padding: 2,
                  borderRadius: 10
                }}
              />
              <div>
                <p style={{ color: "#ffffff" }}>
                  Our pomodoro timer is an easy to use looping timer to boost
                  your efficiency!
                </p>
              </div>
              <SvgIcon style={{ fontSize: 50, color: "#009688" }}>
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </SvgIcon>
            </div>
            <div>
              <h1 style={{ color: "#ffffff" }}>About the Pomodoro Technique</h1>
              <hr
                style={{
                  backgroundColor: "#009688",
                  width: "50%",
                  padding: 2,
                  borderRadius: 10
                }}
              />
              <div style={{ textAlign: "center" }} className="auto">
                <p
                  className="auto"
                  style={{
                    color: "#ffffff",
                    width: "50%",
                    textAlign: "center"
                  }}
                >
                  The pomodoro technique is a time management method developed
                  by Francesco Cirillo in the later 1980s. This technique uses
                  the timer to break down work into a set of intervals separated
                  by breaks. The Pomodoro technique increases productivity by
                  taking short scheduled breaks regularly.
                </p>
              </div>
              <SvgIcon style={{ fontSize: 50, color: "#009688" }}>
                <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
              </SvgIcon>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
