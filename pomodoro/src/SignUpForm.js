import React, { Component } from 'react';
import { form, FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';
import fire from './fire';

export default class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      numCycles: 0,
      activities: [],
      totalTime: 0,
      user: [],
    }

  }

  handleUserInput = e => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signup = e => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      var user = fire.auth().currentUser;
      this.logUser(user)
    }).catch((error) => {
      console.log(error);
    })
  }

  logUser = (user) => {
    let ref = fire.database().ref('users');
    let obj = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      numCycles: this.state.activities,
      activities: this.state.activities,
      totalTime: this.state.totalTime
    };
    ref.push(obj);

  }

  render() {
    return (
      <form>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter Name"
            onChange={(e) => this.handleUserInput(e)}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            name="email"
            type="text"
            value={this.state.email}
            placeholder="Enter Email"
            onChange={(e) => this.handleUserInput(e)}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="text"
            name="password"
            value={this.state.password}
            placeholder="Enter Password"
            onChange={(e) => this.handleUserInput(e)}
          />
        </FormGroup>

        <div className="row">
          <div className="col-sm-1 mr-4">
            <div className="container">
              <Button bsStyle="success" onClick={(e) => this.signup(e)}>Sign Up</Button>
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
