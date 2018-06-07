import React from 'react';
import ReactDom from 'react-dom';
import ReactCountdownClock from 'react-countdown-clock'
import "./App.css";
import fire from './fire.js'

import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  TextField, Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import green from "@material-ui/core/colors/green";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button_text: "Start working",
      paused: true,
      activity: "",
      time: 5,
      users: []
    }
  }

  switchTimes = e => {
    if (this.state.time === 5) {
      this.setState({ time: 2.5, button_text: "Start break", status: "Take a break!" })
    }
    else if (this.state.time === 2.5) {
      this.setState({ time: 5, button_text: "Start working", status: "Work now!" })
    }
    this.setState({
      paused: true
    })
  }

  Change = e => {
    let newAct = []
    newAct.push(e.target.value)
    this.setState({
      activity: newAct
    });
  }
  componentDidMount() {
    const usersRef = fire.database().ref('users');
    usersRef.on('value', (snapshot) => {
      let users1 = snapshot.val();
      this.setState({ users: users1 });
    });
  }

  Submit = e => {
    e.preventDefault();
    let vals = [];
    let userID = "";
    var user1 = fire.auth().currentUser;
    var email1;
    if (user1 != null) {
      email1 = user1.email;
    }
    let i = 0;
    let act = [];

    const usersRef = fire.database().ref('users');

    Object.keys(this.state.users).forEach((key) => {
      console.log(key, this.state.users[key]);
      if (this.state.users[key].email = email1) {
        userID = key;
        if (this.state.users[key].activity) {
          act = this.state.users[key].activity;
        } else { act = [] }
      }
    }
    );
    act.push(this.state.activity)
    let hopperRef = fire.database().ref('/users/' + userID);
    hopperRef.update({
      "activity": act
    });
    this.setState({ activity: "" });
  }

  render() {
    return (
      <div>
        <div>
          <AppBar position="static"
            style={{
              backgroundColor: "darkred",
              marginBottom: 20

            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                style={{ marginLeft: -12, marginRight: 20 }}
                onClick={e => this.props.updateParent(true)}
              >
                <MenuIcon />
              </IconButton>
              Timer

          </Toolbar>
          </AppBar>
        </div>

        <div className="Work-timer" >
          <ReactCountdownClock seconds={this.state.time} color="#000" alpha={0.9} size={300} paused={this.state.paused} onComplete={this.switchTimes} />
        </div>
        <div className="Start-button">
          <MuiThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={this.startTimer}> {this.state.button_text} </Button>
          </MuiThemeProvider>
        </div>
        <div className="Activity-input">
          <TextField name="activity" placeholder="activity" onChange={this.Change} value={this.state.activity} />
          <MuiThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={this.Submit}> Submit </Button>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}
