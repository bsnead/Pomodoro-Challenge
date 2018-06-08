import React, { Component } from "react";
import { form, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import fire from "./fire";
import "./Authentication.css";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import FormError from "./FormError";
import purple from "@material-ui/core/colors/purple";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009688",
      contrastText: "#000"
    }
  }
});

export default class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      nameValid: false,
      emailValid: false,
      formNotValid: true
    };
    this.onDisable = this.onDisable.bind(this);
  }

  onDisable = () => {
    if (
      this.state.email.length < 1 ||
      this.state.name.length < 1 ||
      this.state.password.length < 1
    ) {
      this.setState({
        formNotValid: true
      });
    } else {
      this.setState({
        formNotValid: false
      });
    }
  };

  handleEmailError = () => {
    if (this.state.email.length < 1) {
      return <FormError name="Email" />;
    }
  };

  handlePasswordError = () => {
    if (this.state.password.length < 1) {
      return <FormError name="Password" />;
    }
  };

  handleUserInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    this.setState({
      formNotValid: false
    });
  };

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1 className="loginText" color="primary">
          Login{" "}
        </h1>
        <form>
          <FormGroup>
            <TextField
              id="email"
              label="Email"
              style={{ width: "70%" }}
              value={this.state.email}
              onChange={e => this.handleUserInput(e)}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              id="password"
              label="Password"
              style={{ width: "70%" }}
              value={this.state.password}
              onChange={e => this.handleUserInput(e)}
            />
          </FormGroup>
          <div className="row">
            <div className="col-md-1 col-sm-12 offset-md-3 mr-3">
              <div className="container">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={e => this.login(e)}
                  disabled={this.state.formNotValid}
                >
                  Login
                </Button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 ml-4">
              <div className="container">
                Don't Have an Account?
                <Button
                  variant="outlined"
                  onClick={this.props.goToSignUp}
                  style={{ marginLeft: 20 }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
