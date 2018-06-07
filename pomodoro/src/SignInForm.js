import React, { Component } from 'react';
import { form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import fire from './fire';

import TextField from '@material-ui/core/TextField';
import FormError from './FormError';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';


export default class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      nameValid: false,
      emailValid: false,
      formNotValid: true
    }
    this.onDisable = this.onDisable.bind(this)

  }

  onDisable = () => {
    if (this.state.email.length < 1 || this.state.name.length < 1 || this.state.password.length < 1) {
      this.setState({
        formNotValid: true
      })
    } else {
      this.setState({
        formNotValid: false
      })
    }
  }

  handleEmailError = () => {
    if (this.state.email.length < 1) {
      return (
        <FormError name="Email"/>
      )
    }
  }

  handlePasswordError = () => {
    if (this.state.password.length < 1) {
      return (
        <FormError name="Password"/>
      )
    }
  }

  handleUserInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
    this.setState({
      formNotValid: false
    })
  }

  login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      console.log(u)
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
      <form>
        <FormGroup>
          <TextField
            id="email"
            label="Email"
            fullWidth
            value={this.state.email}
            onChange={(e) => this.handleUserInput(e)}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            id="password"
            label="Password"
            fullWidth
            value={this.state.password}
            onChange={(e) => this.handleUserInput(e)}
          />
        </FormGroup>
        <div className="row">
          <div className="col-sm-1 mr-3">
            <div className="container">
              <Button variant="contained" color="primary" onClick={(e) => this.login(e)} disabled={this.state.formNotValid}>Sign In</Button>
            </div>
          </div>
          <div className="col-sm-6 ml-4">
            <div className="container">
              <Button variant="outlined" onClick={this.props.goToSignUp}>
                Dont Have an Account? Make One
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
    )
  }
}
