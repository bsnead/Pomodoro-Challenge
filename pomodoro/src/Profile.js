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

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      github: "",
      activitylog: [],
      numCycles: 0,
      totalCycles: 0,
      totalTime: 0
    };
  }

  render() {
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
            <Typography>
              <strong>Name: {this.state.name} </strong>
            </Typography>
            <Typography>
              <strong>GitHub: {this.state.github} </strong>
            </Typography>
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
            <Typography>
              <strong>Number of Cycles Today: {this.state.numCycles} </strong>
            </Typography>
            <Typography>
              <strong>Total Number of Cycles: {this.state.totalCycles} </strong>
            </Typography>
            <Typography>
              <strong>Total Time: {this.state.totalTime} </strong>
            </Typography>
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
            <CardContent />
          </Card>
        </div>
      </div>
    );
  }
}
