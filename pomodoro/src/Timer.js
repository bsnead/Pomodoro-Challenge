import React from 'react';
import ReactDom from 'react-dom';

import ReactCountdownClock from 'react-countdown-clock'



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
        <button onClick={this.startTimer}>Start</button>
        </div> 
        )
    }
}