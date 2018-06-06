import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import fire from './fire';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1>You Are Home</h1>
        <Button className="btn btn-secondary" onClick={this.logout}>Logout</Button>
      </div>

    )
  }
}
