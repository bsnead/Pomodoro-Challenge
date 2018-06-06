import React from 'react';
import ReactDom from 'react-dom';

import ReactCountdownClock from 'react-countdown-clock'
import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Typography,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isClicked: false
        };
      }

    startTimer = e => {
        e.preventDefault();
        this.setState ({ isClicked: true })
    }

    render() {
        if (this.state.isClicked) {
            return (
                <div>
                <AppBar >
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
                    <ReactCountdownClock seconds={1500} color="#000" alpha={0.9} size={300}/>
                </div>
            )
        }
        return(
        <div>
        <AppBar>
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
        <button onClick={this.startTimer}>Start</button>
        </div>
        )
    }
}
