import React from 'react';
import ReactDom from 'react-dom';
import ReactCountdownClock from 'react-countdown-clock'; 
import "./App.css";
import fire from './fire.js'; 

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
    primary: {
      main: '#009688',
      contrastText: "900"
    }
  }
});

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button_text: "Start working",
      paused: true,
      activity: "",
      time: 1500,
      status: "Work now!", 
      numCycles: 0, 
      date: new Date().toLocaleString(), 
    }
  }

  startTimer = e => {
    e.preventDefault();
    this.setState({ paused: !this.state.paused });
  }

  switchTimes = e => {
    let count = this.state.numCycles
    if (this.state.time === 5) {
      this.setState({ time: 2.5, button_text: "Start break", status: "Take a break!" })
    }
    else if (this.state.time === 2.5) {
      this.setState({ time: 5, button_text: "Start working", status: "Work now!", numCycles: count + 1 })
   
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
    let date = []; 

    const usersRef = fire.database().ref('users');

    Object.keys(this.state.users).forEach((key) => {
      if (this.state.users[key].email = email1) {
        userID = key;
        if (this.state.users[key].activity) {
          act = this.state.users[key].activity;
          
        } else { act = [] }
        if (this.state.users[key].date) {
          date = this.state.users[key].date;
          
        } else { date = [] }
      }
    }
    );
    act.push(this.state.activity)
    date.push(this.state.date)
    let hopperRef = fire.database().ref('/users/' + userID);
    hopperRef.update({
      "activity": act, 
      "date": date, 
      "numCycles": this.state.numCycles, 
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

        <div className="status">
          <h2>{this.state.status}</h2>
        </div>
        <div id="parappa">
          <Grid container justify="center" spacing={24}>
            <Grid item xs={12}>
              <div className="Work-timer" >
                <ReactCountdownClock seconds={this.state.time} 
                weight = "50" 
                color="#b2d8d8" 
                alpha={0.9} 
                size={300} 
                paused={this.state.paused} 
                onComplete={this.switchTimes} 
                font="roboto"/>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="Start-button">
                <MuiThemeProvider theme={theme}>
                  <Button variant="contained" 
                  color="primary" 
                  onClick={this.startTimer}> 
                  {this.state.button_text} </Button>
                </MuiThemeProvider>
              </div>
            </Grid>
            <Grid item xs={12} >
              <div className="Activity-input">
                <TextField name="activity" 
                placeholder="activity" 
                onChange={this.Change} 
                value={this.state.activity} />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="Start-button">
                <MuiThemeProvider theme={theme}>
                  <Button variant="contained" 
                  color="primary" 
                  onClick={this.Submit}> Submit </Button>
                </MuiThemeProvider>
              </div >
            </Grid>
          </Grid>
        </div>
      </div>

    )
  }
}

// onSubmit={this.Submit}
