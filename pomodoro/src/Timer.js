import React from "react";
import ReactDom from "react-dom";

import ReactCountdownClock from "react-countdown-clock";

import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Typography,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Button from "@material-ui/core/Button";
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
      isClicked: false
    };
  }

  startTimer = e => {
    e.preventDefault();
    this.setState({ isClicked: true });
  };

  render() {
    if (this.state.isClicked) {
      return (
        <div>
          <AppBar
            position="static"
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ReactCountdownClock
            seconds={1500}
            color="#000"
            alpha={0.9}
            size={300}
          />
        </div>
      );
    }
    return (
      <div>
        <div>
          <AppBar
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
          <br />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button onClick={this.startTimer}>Start</button>
        </div>

        <div>
          <MuiThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.startTimer}
            >
              {" "}
              Start{" "}
            </Button>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
