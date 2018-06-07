import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Row, Col, grid } from 'react-bootstrap';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    }
    this.goBack = this.goBack.bind(this);
  }

  goBack = () => {
    this.setState({
      activeIndex: 0
    })
  }

  renderContent = () => {
    if(this.state.activeIndex == 0) {
      return(

          <Row className="show-grid">
            <Col xs={6}>
              <Button bsSize="large" bsStyle="info" onClick={()=> this.onSignUp()}>Sign Up</Button>
            </Col>
            <Col xs={6}>
              <Button bsSize="large" bsStyle="info" onClick={()=> this.onSignIn()}>Sign In</Button>
            </Col>
          </Row>


      );
    } else if(this.state.activeIndex == 1) {
      return(
        <SignUpForm goBack={this.goBack} />
      );
    } else {
      return(
        <SignInForm goBack={this.goBack}/>
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

      <Grid>
          <Row className="show-grid">
            <Col xs={12} className="text-center" style={{paddingLeft: 300}}>
              <h1>Pomodoro App</h1>
              <h4>Brought to you by:</h4>
              <h2>Team Tomato</h2>
              <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
              </div>
            </Col>
          </Row>

            {this.renderContent()}

        </Grid>
    );
  }
}
