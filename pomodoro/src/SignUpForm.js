import React, { Component } from "react";
import { form, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import fire from "./fire";
import Button from "@material-ui/core/Button";
import FormError from "./FormError";
import purple from "@material-ui/core/colors/purple";
import "./Authentication.css";

export default class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      numCycles: 0,
      activities: [],
      totalTime: 0,
      user: [],
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

  handleNameError = () => {
    if (this.state.name.length < 1) {
      return <FormError name="Name" />;
    }
  };

  handlePasswordError = () => {
    if (this.state.password.length < 6) {
      return (
        <FormError name="Password of at least 6 characters long"/>
      )

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

  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        var user = fire.auth().currentUser;
        this.logUser(user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  logUser = user => {
    let ref = fire.database().ref("users");
    let obj = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      numCycles: this.state.numCycles,
      activities: this.state.activities,
      totalTime: this.state.totalTime
    };
    ref.push(obj);
  };

  render() {
    return (
      <div>
        <h1 className="signupText">Sign Up</h1>
        <form>
          <FormGroup>
            <TextField
              id="name"
              label="Name"
              fullWidth
              value={this.state.name}
              onChange={e => this.handleUserInput(e)}
            />
            {this.handleNameError()}
          </FormGroup>
          <FormGroup>
            <TextField
              id="email"
              label="Email"
              fullWidth
              value={this.state.email}
              onChange={e => this.handleUserInput(e)}
            />
            {this.handleEmailError()}
          </FormGroup>
          <FormGroup>
            <TextField
              id="password"
              label="Password"
              fullWidth
              value={this.state.password}
              onChange={e => this.handleUserInput(e)}
            />
            {this.handlePasswordError()}
          </FormGroup>
          <div className="row">
            <div className="col-sm-3 pb-4">
              <div>
                <Button
                  className="mb-3"
                  variant="contained"
                  color="primary"
                  onClick={e => this.signup(e)}
                  disabled={this.state.formNotValid}
                >
                  Submit
                </Button>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container">
                <Button variant="outlined" onClick={this.props.goBack}>
                  Back
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
