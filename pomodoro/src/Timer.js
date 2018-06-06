import React from 'react';
import ReactDom from 'react-dom';

import ReactCountdownClock from 'react-countdown-clock'

export default class Timer extends React.Component {

    state = {display: false}
    
    startTimer = (e) => {
        this.setState ({ display: true })
    }

    render() {
        if (this.state.display) {
            <ReactCountdownClock seconds={1500} color="#000" alpha={0.9} size={300}/>
        }
        
        return(
        <div> 
        <button onClick={e => this.startTimer(e)}>Start</button>
        </div> 
        )
    }
}