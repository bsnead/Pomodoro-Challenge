import React from 'react';
import ReactDom from 'react-dom';
import ReactCountdownClock from 'react-countdown-clock'
import "./App.css";

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
      status: "Work now!",
    };
  }

  startTimer = e => {
    e.preventDefault();
    this.setState({ paused: !this.state.paused })
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

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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

        <div className="status" >
          <h2> {this.state.status} </h2>
        </div>

        <div id="parappa">
          <div className="Work-timer">
            <ReactCountdownClock style={{ marginTop: 40, marginBottom: 40 }} seconds={this.state.time} color="#000" alpha={0.9} size={300} paused={this.state.paused} onComplete={this.switchTimes} />
          </div>

          <div className="Start-button">
            <MuiThemeProvider theme={theme} >
              <Button style={{ position: "fixed", marginTop: 40, marginBottom: 40 }} position="static" variant="contained" color="primary" onClick={this.startTimer}> {this.state.button_text} </Button>
            </MuiThemeProvider>
          </div>

          <div className="Activity-input">
            <TextField style={{ position: "static", marginTop: 70, marginBottom: 40 }} position="static" name="activity" placeholder="activity" onChange={this.onChange} />
          </div>
        </div>

      </div>
    )
  }

}
