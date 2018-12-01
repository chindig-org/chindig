import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Settings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({open: props.open})
  }

  closeSettings = () => {
    this.setState({ open: false });
  };


  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.closeSettings} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Settings
              </Typography>
              <Button color="inherit" onClick={this.closeSettings}>
                Done
              </Button>
            </Toolbar>
          </AppBar>

          {
            /*
            This list is just taken from example code.
            Feel free to modify the list in any way with different or custom elements
            */
          }
          <List>

            <ListItem button>
              <ListItemText primary="Nofications thing" secondary="blah blah" />
            </ListItem>

            <Divider />

            <ListItem button>
              <ListItemText primary="Some other option" secondary="blah blah blah" />
            </ListItem>
          </List>

        </Dialog>
      </div>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);