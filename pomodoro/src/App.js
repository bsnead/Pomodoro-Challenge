import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authentication from './Authentication';
import Home from './Home';
import fire from './fire';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({user: null});
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.user ? (<Home />) : (<Authentication />)}
      </div>
    );
  }
}

export default App;
