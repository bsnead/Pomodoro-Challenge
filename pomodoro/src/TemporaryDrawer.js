import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Update, Person, Star, ArrowBack } from "@material-ui/icons";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
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

          <Divider />

          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>

          <Divider />

          <ListItem button>
            <ListItemIcon>
              <Star />
            </ListItemIcon>
            <ListItemText primary="Leaderboard" />
          </ListItem>

          <Divider />

          <ListItem button>
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
