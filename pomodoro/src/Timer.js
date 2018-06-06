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
          workpaused: true,
          breakpaused: true,
          activity: ""
        };
      }

  startWork = e => {
        e.preventDefault();
        this.setState ({ workpaused: !this.state.workpaused })
    }

    startBreak = e => {
        e.preventDefault();
        this.setState ({ breakpaused: false })
        const activity = this.state.activity;
        console.log(activity);
        // const activityRef = firebase.database().ref('activities');
        // activityRef.push(activity);
        // this.seteState({
        //     acitiviy: "",
        // })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
    return (

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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ReactCountdownClock seconds={1500} color="#000" alpha={0.9} size={300} paused={this.state.workpaused}/>
        <MuiThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={this.startWork}> Start Working </Button>
        </MuiThemeProvider>

        <ReactCountdownClock seconds={300} color="#000" alpha={0.9} size={300} paused={this.state.breakpaused}/>
        <MuiThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={this.startBreak}> Start Break </Button>
        </MuiThemeProvider>

        <br />
        <TextField name="activity" placeholder="activity" onChange={this.onChange}/>
      </div>

        )
      }
    }
