import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Update, Person, Star, ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import fire from './fire';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {

  logout() {
    fire.auth().signOut();
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div>
        <List>
          <Link to="/timer">
            <ListItem button>
              <ListItemIcon>
                <Update />
              </ListItemIcon>
              <ListItemText primary="Timer" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/profile">
            <ListItem button>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/leaderboard">
            <ListItem button>
              <ListItemIcon>
                <Star />
              </ListItemIcon>
              <ListItemText primary="Leaderboard" />
            </ListItem>
          </Link>
          <Divider />

          <ListItem button onClick={() => this.logout()}>
            <ListItemIcon>
              <ArrowBack />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
          <Divider />
        </List>
      </div>
    );

    return (
      <div>
        <Drawer
          open={this.props.left}
          onClose={e => this.props.updateParent(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={e => this.props.updateParent(false)}
            onKeyDown={e => this.props.updateParent(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
