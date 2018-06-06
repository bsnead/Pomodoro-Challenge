import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Typography,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import firebase from './firebase.js'
import sortBy from "lodash/sortBy"

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "90%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

class CustomizedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:0,
      data: []
    };
  }

  componentDidMount(){
    const usersRef = firebase.database().ref('users');
    usersRef.on('value', (snapshot) => {
    let users = snapshot.val();
    let newState = [];

    for (let user in users) {
      newState.push({
        name: users[user].name,
        numCycles: users[user].cycles,
        index: 0
      });
    }

    newState.sort((a, b) => a.numCycles < b.numCycles)
        .map((user, i) => 
        <div key={i}> {user.name} {user.cycles} {user.index = i}</div>
      );

      this.setState({
        data: newState
      });
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar
          position="static"
          style={{
            backgroundColor: "#cc3737"
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
            Profile Page
          </Toolbar>
        </AppBar>
        <Paper
          className={classes.root}
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20
          }}
        >
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Rank</CustomTableCell>
                <CustomTableCell numeric>Name</CustomTableCell>
                <CustomTableCell numeric>
                  Completed Timer Cycles
                </CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map(n => {
                return (
                  <TableRow className={classes.row} key={this.state.id}>
                    <CustomTableCell component="th" scope="row">
                      {n.index += 1 }
                    </CustomTableCell>
                    <CustomTableCell numeric>{n.name}</CustomTableCell>
                    <CustomTableCell numeric>{n.numCycles}</CustomTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);