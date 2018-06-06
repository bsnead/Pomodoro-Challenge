import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Authentication from "./Authentication";
import fire from "./fire";
import Timer from "./Timer";
import TemporaryDrawer from "./TemporaryDrawer";
import Profile from "./Profile";
import CustomizedTable from "./demo.js";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false
    };
  }
  updateField = open => {
    this.setState({
      left: open
    });
    console.log("function triggered");
  };

  renderTimer = () => {
    return (
      <div>
        {console.log("open timer")}
        <TemporaryDrawer
          updateParent={newVal => this.updateField(newVal)}
          left={this.state.left}
        />
        <Timer updateParent={newVal => this.updateField(newVal)} />
      </div>
    );
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Redirect to="/timer" />
            <Route path="/timer" render={() => this.renderTimer()} />
            <Route
              path="/profile"
              render={() => (
                <div>
                  <TemporaryDrawer
                    updateParent={newVal => this.updateField(newVal)}
                    left={this.state.left}
                  />
                  <Profile updateParent={newVal => this.updateField(newVal)} />
                </div>
              )}
            />
            <Route
              path="/leaderboard"
              render={() => (
                <div>
                  <TemporaryDrawer
                    updateParent={newVal => this.updateField(newVal)}
                    left={this.state.left}
                  />
                  <CustomizedTable
                    updateParent={newVal => this.updateField(newVal)}
                  />
                </div>
              )}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
