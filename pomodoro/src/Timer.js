import React from 'react';
import ReactDom from 'react-dom';

import ReactCountdownClock from 'react-countdown-clock'

import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      primary: green,
    },
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
        this.setState ({ isClicked: true })
    }

    render() {
        if (this.state.isClicked) {
            return (
                <div> 
                    <ReactCountdownClock seconds={1500} color="#000" alpha={0.9} size={300}/>
                </div> 
            )
        }
        return(
        <div> 
        <MuiThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={this.startTimer}> Start </Button>
        </MuiThemeProvider>
        </div> 
        )
    }
}