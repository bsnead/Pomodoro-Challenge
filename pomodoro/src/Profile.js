import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Typography,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import fire from './fire';


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      activities: [],
      totalCycles: 0,
      totalTime: 0,
      data: []
    };
  }

  componentDidMount() {
    const usersRef = fire.database().ref('users');
    usersRef.on('value', (snapshot) => {
      let users = snapshot.val();
      let newState = {};

      var user1 = fire.auth().currentUser;
      var email1;
      if (user1 != null) {
        email1 = user1.email;
      }

      for (let user in users) {
        if (users[user].email == email1)
          newState = {
            name: users[user].name,
            email: users[user].email,
            numCycles: users[user].numCycles,
            totalTime: users[user].totalTime,
            activities: users[user].activity
          };
      }

      this.setState({
        data: newState
      });
    });
  }

  render() {
    var user1 = fire.auth().currentUser;
    var activity1;
    if (user1 != null) {
      activity1 = user1.activities;
    }
    console.log(user1)
    return (
      <div>
        <AppBar
          position="static"
          style={{
            backgroundColor: "darkred"
            //backgroundColor: "#cc3737"
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
            Profile
          </Toolbar>
        </AppBar>

        <Card
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20
          }}
        >

          <CardContent>
            <div>
              <Typography><strong>Name:</strong> {this.state.data.name}</Typography>
              <Typography><strong>Email: </strong>{this.state.data.email}</Typography>
            </div>


          </CardContent>

        </Card>
        <Card
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20
          }}
        >
          <CardContent>

            <div>
              <Typography><strong> Total Number of Cycles:</strong> {this.state.data.numCycles} cycles</Typography>
              <Typography><strong> Total Time You've Been Working: </strong>{this.state.data.numCycles * 30} minutes</Typography>
            </div>


          </CardContent>
        </Card>

        <div style={{ overflow: "auto" }}>
          <Card
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 3,
              marginBottom: 20,
              height: 500
            }}
          >
            <CardContent>
              {console.log(this.state.data.activities)}

              <div>
                <Typography><strong> Activity Log:</strong> {this.state.data.activities ? this.state.data.activities.map(n => {
                  return (
                    <div>
                      {"date, time: " + n}
                      <br />
                    </div>
                  );
                }) : []
                }</Typography>
              </div>


            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
