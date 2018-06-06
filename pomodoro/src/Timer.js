import React from 'react';
import ReactDom from 'react-dom';
import ReactCountdownClock from 'react-countdown-clock'


import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  TextField
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
          paused: true,
          activity: "",
          time: 5
        };
      }

    startTimer = e => {
        e.preventDefault();
        this.setState ({ paused: !this.state.paused })
    }

    switchTimes = e => {
      if(this.state.time === 5) {
        this.setState({time: 2.5})
      }
      else if(this.state.time === 2.5) {
        this.setState({time:5})
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

    render(){
    return (
        <div>
        <div>
          <AppBar position="static"
            style={{
              backgroundColor: "#cc3737"
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
        <div className = "Work-timer">
          <ReactCountdownClock seconds={this.state.time} color="#000" alpha={0.9} size={300}
          paused={this.state.paused}
          onComplete={this.switchTimes}/>
          <div className = "Working-button">
            <MuiThemeProvider theme={theme}>
                <Button variant="contained" color="primary" onClick={this.startTimer}> Start Working </Button>
            </MuiThemeProvider>
          </div>
        </div>
        <div className = "Activity-input">
          <TextField name="activity" placeholder="activity" onChange={this.onChange}/>
        </div>
        </div>
        )
    }

}
