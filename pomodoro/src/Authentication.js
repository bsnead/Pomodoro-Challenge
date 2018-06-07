import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Button, Row, Col, grid } from 'react-bootstrap';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Background from './assets/work.jpg';

export default class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    }
    this.goBack = this.goBack.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
  }


  goBack = () => {
    this.setState({
      activeIndex: 0
    })
  }
  goToSignUp = () => {
    this.setState({
      activeIndex: 1
    })
  }

  renderContent = () => {
    if(this.state.activeIndex == 0) {
      return(

          <SignInForm goToSignUp={this.goToSignUp} />


      );
    } else if(this.state.activeIndex == 1) {
      return(
        <SignUpForm goBack={this.goBack} />
      );
    } else {
      return(
        <SignInForm goBack={this.goBack} goToSignUp={this.goToSignUp}/>
      );
    }
  }

  onSignUp = () => {
    this.setState({
      activeIndex: 1
    })
  }

  onSignIn = () => {
    this.setState({
      activeIndex: 2
    })
  }



  render() {


    return(

        <section style={{backgroundImage:`url(${Background})`, height: 1000, width: '100%'}}>
          <div className="jumbotron boxStyle" style={{width: '70%', textAlign: 'center'}}>
            <div className="row">

              <div className="col-sm-12 centered">
                {this.renderContent()}
              </div>

            </div>
          </div>
        </section>

    );
  }
}
