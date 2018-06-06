import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Update, Person, Star } from "@material-ui/icons";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Update />
            </ListItemIcon>
            <ListItemText primary="Timer" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Star />
            </ListItemIcon>
            <ListItemText primary="Leaderboard" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer("left", true)}>Open Left</Button>

        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
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
