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
import Icon from '@material-ui/core/Icon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Popper } from '@material-ui/core';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  clickColor: {
    backgroundColor: '#D0D2D4',
  },
  common: {
    backgroundColor: 'white',
  },
  formControl: {
    minWidth: 165,
  },
  secondList: {
    paddingLeft: 60,
  },
  inline: {
    display: 'flex',
  },
  middle: {
    textAlign: 'center',
    minWidth: 300,
  },
  item: {
    maxHeight: 100,
  },
  text: {
    width: '100%',
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      o1: false,
      o2: false,
      o3: false,
      o4: false,
      o5: false,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({open: props.open})
  }

  closeLogin = () => {
    this.setState({ open: false });
    this.props.onClose();
  };

  handleClick1 = () => {
    this.setState(state => ({ o1: !state.o1 }));

    this.setState(state => ({ o2: false }));
    this.setState(state => ({ o3: false }));
    this.setState(state => ({ o4: false }));
    this.setState(state => ({ o5: false }));
  };
  handleClick2 = () => {
    this.setState(state => ({ o2: !state.o2 }));

    this.setState(state => ({ o1: false }));
    this.setState(state => ({ o3: false }));
    this.setState(state => ({ o4: false }));
    this.setState(state => ({ o5: false }));
  };
  handleClick3 = () => {
    this.setState(state => ({ o3: !state.o3 }));

    this.setState(state => ({ o2: false }));
    this.setState(state => ({ o1: false }));
    this.setState(state => ({ o4: false }));
    this.setState(state => ({ o5: false }));
  };
  handleClick4 = () => {
    this.setState(state => ({ o4: !state.o4 }));

    this.setState(state => ({ o2: false }));
    this.setState(state => ({ o3: false }));
    this.setState(state => ({ o1: false }));
    this.setState(state => ({ o5: false }));
  };
  handleClick5 = () => {
    this.setState(state => ({ o5: !state.o5 }));

    this.setState(state => ({ o2: false }));
    this.setState(state => ({ o3: false }));
    this.setState(state => ({ o4: false }));
    this.setState(state => ({ o1: false }));
  };

  handleSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }
  handleSwitchChange = event => {
    this.setState({ preference: event.target.value });
  };
  handleNSwicthChange = name => event => {
    this.setState({
      [name]: event.target.checked,
    });
  }
  render() {
    const { classes } = this.props;

    return (
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >

          {
            /*
            This list is just taken from example code.
            Feel free to modify the list in any way with different or custom elements
            */
          }
          <List disablePadding>
          <ListItem dense>
            <h3 className={classes.middle}>
             Log In </h3>
          </ListItem>
          <ListItem dense>
            <TextField className={classes.text}
                id="standard-name"
                label="username"
                margin="normal"
              />
          </ListItem>
          <ListItem dense>
            <TextField className={classes.text}
                type="password"
                id="standard-pass"
                label="password"
                margin="normal"
              />
          </ListItem>
          <ListItem>
            <ListItem>
              <Button onClick={this.closeLogin} variant="contained" size="large" color="primary">Login</Button>
              <ListItemText primary="   "/>
              <Button onClick={this.closeLogin} variant="contained" size="large" color="primary">Cancel</Button>
            </ListItem>
          </ListItem>
          </List>

        </Dialog>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);