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

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "teal",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "90%",
    margin: "auto",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 50
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
      id: 0,
      data: [
        { rank: 1, name: "Ian James McCray", cycles: 36 },
        { rank: 2, name: "Taylor", cycles: 22 },
        { rank: 3, name: "Christian", cycles: 21 },
        { rank: 4, name: "Bailey", cycles: 18 },
        { rank: 5, name: "Carter", cycles: 15 },
        { rank: 6, name: "Manana", cycles: 13 },
        { rank: 7, name: "Edward", cycles: 1 }
      ]
    };
  }

  render() {
    const { classes } = this.props;

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
            Leaderboard
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
                      {n.rank}
                    </CustomTableCell>
                    <CustomTableCell numeric>{n.name}</CustomTableCell>
                    <CustomTableCell numeric>{n.cycles}</CustomTableCell>
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
