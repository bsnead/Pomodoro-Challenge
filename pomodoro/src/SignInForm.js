import React, { Component } from 'react';
import { form, FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';
import fire from './fire';

export default class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }

  }

  handleNameChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
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
      <form>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            value={this.state.email}
            placeholder="Enter Email"
            onChange={(e) => this.handleNameChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="text"
            value={this.state.password}
            placeholder="Enter Password"
            onChange={(e) => this.handlePasswordChange(e)}
          />
        </FormGroup>
        <div className="row">
          <div className="col-sm-1 mr-3">
            <div className="container">
              <Button bsStyle="success" onClick={(e) => this.login(e)}>Sign In</Button>
            </div>
          </div>
          <div className="col-sm-1">
            <div className="container">
              <Button bsStyle="danger" onClick={this.props.goBack}>Back</Button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
