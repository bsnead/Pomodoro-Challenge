import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TemporaryDrawer from "./TemporaryDrawer";
import Profile from "./Profile";
import Timer from "./Timer";
import CustomizedTable from "./demo.js";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      left: false
    };
  }

  updateField(open) {
    this.setState({
      left: open
    });
    console.log("function triggered");
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Redirect to="/timer" />
          <Route
            path="/timer"
            render={() => (
              <div>
                <TemporaryDrawer
                  updateParent={newVal => this.updateField(newVal)}
                  left={this.state.left}
                />
                <Timer updateParent={newVal => this.updateField(newVal)} />
              </div>
            )}
          />
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
    );
  }
}

export default App;
