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
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Settings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      o1: false,
      o2: false,
      o3: false,
      o4: false,
      o5: false,
      frequency: 2,
      numberNote: 10,
      preference: "relevant",
      noOneCheck: true,
      friendCheck: false,
      everyoneCheck: false,
      fontFamily: 1,
      fontSize: 16,
      color: 1,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({open: props.open})
  }

  closeSettings = () => {
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
          <ListItem button onClick={this.handleClick1} className={this.state.o1?classes.clickColor:classes.common}>
            <Icon>watch_later</Icon>
            <ListItemText inset primary="Notification" secondary="Choose your notification preference" />
            {this.state.o1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.o1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem>
              <ListItemText inset primary="Notification frequency" />
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="note-freq">Frequency</InputLabel>
                <Select
                value={this.state.frequency}
                onChange={this.handleSelectChange}
                inputProps={{
                  name: 'frequency',
                  id: 'note-freq',
                }}
                >
                <MenuItem value={1}><em>per hour</em></MenuItem>
                <MenuItem value={2}>per day</MenuItem>
                <MenuItem value={3}>per week</MenuItem>
                <MenuItem value={4}>Never</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <ListItemText inset primary="Max Number of Notification" />
              <TextField
                id="standard-name"
                label="number"
                className={classes.textField}
                value={this.state.numberNote}
                onChange={this.handleInputChange('numberNote')}
                margin="normal"
              />
            </ListItem>
            <ListItem>
              <ListItemText inset primary="Notification Preference" />
              <div>
              <FormControl component="fieldset">
                {/* <FormLabel component="legend"></FormLabel> */}
                <RadioGroup
                row={true}
                aria-label="Notification Preference"
                name="preference"
                value={this.state.preference}
                onChange={this.handleSwitchChange}
                >
                  <FormControlLabel value="relevant" control={<Radio />} label="My interest" />
                  <FormControlLabel value="recent" control={<Radio />} label="Recent" />
                  <FormControlLabel value="hotness" control={<Radio />} label="Hotness" />
                </RadioGroup>
              </FormControl>
              </div>
            </ListItem>
            </List>
          </Collapse>

            <Divider />
            <ListItem button onClick={this.handleClick2} className={this.state.o2?classes.clickColor:classes.common}>
            <Icon>verified_user</Icon>
              <ListItemText primary="Privacy" secondary="Set who can see your event and other authorization work" />
              {this.state.o2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.o2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText inset primary="Friends" />
                <Switch
                  checked={this.state.noOneCheck}
                  onChange={this.handleNSwicthChange('noOneCheck')}
                  value="noOneCheck"
                  color="primary"
                />
              </ListItem>
              <ListItem>
                <ListItemText inset primary="Group Member" />
                <Switch
                  checked={this.state.friendCheck}
                  onChange={this.handleNSwicthChange('friendCheck')}
                  value="friendCheck"
                  color="primary"
                />
              </ListItem>
              <ListItem>
                <ListItemText inset primary="Others" />
                <Switch
                  checked={this.state.everyoneCheck}
                  onChange={this.handleNSwicthChange('everyoneCheck')}
                  value="everyoneCheck"
                  color="primary"
                />
              </ListItem>
            </List>
            </Collapse>

            <Divider />

            <ListItem button onClick={this.handleClick3} className={this.state.o3?classes.clickColor:classes.common}>
            <Icon>apps</Icon>
              <ListItemText primary="General" secondary="Set the font, Text size, background and other general details" />
              {this.state.o3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.o3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem>
              <ListItemText inset primary="Font Family" />
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="note-freq">font</InputLabel>
                <Select
                value={this.state.fontFamily}
                onChange={this.handleSelectChange}
                inputProps={{
                  name: 'fontFamily',
                  id: 'font-family',
                }}
                >
                <MenuItem value={1}><em>Georgia</em></MenuItem>
                <MenuItem value={2}>Palatino Linotype</MenuItem>
                <MenuItem value={3}>Book Antiqua</MenuItem>
                <MenuItem value={4}>Times New Roman</MenuItem>
                <MenuItem value={5}>Arial</MenuItem>
                <MenuItem value={6}>Helvetica</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <ListItemText inset primary="Font Size" />
              <TextField
                id="standard-name1"
                label="size"
                className={classes.textField}
                value={this.state.fontSize}
                onChange={this.handleInputChange('fontSize')}
                margin="normal"
              />
            </ListItem>
            <ListItem>
              <ListItemText inset primary="BackGround" />
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="myItem">color</InputLabel>
                <Select
                value={this.state.color}
                onChange={this.handleSelectChange}
                inputProps={{
                  name: 'color',
                  id: 'font-color',
                }}
                >
                <MenuItem value={1}><em>blue</em></MenuItem>
                <MenuItem value={2}>orange</MenuItem>
                <MenuItem value={3}>gray</MenuItem>
                <MenuItem value={4}>brown</MenuItem>
                <MenuItem value={5}>green</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            </List>
          </Collapse>
            <Divider />
            <ListItem button onClick={this.handleClick4} className={this.state.o4?classes.clickColor:classes.common}>
            <Icon>bookmark</Icon>
              <ListItemText primary="About" secondary="Give the version" />
              {this.state.o4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.o4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem>
              <ListItemText inset primary="We are the chindig team doing the work help people find the local event" />
            </ListItem>
            </List>
            </Collapse>
            <Divider />
            <ListItem button onClick={this.handleClick5} className={this.state.o5?classes.clickColor:classes.common}>
            <Icon>help</Icon>
              <ListItemText primary="Help" secondary="Give introduction on how to use it" />
              {this.state.o5 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.o5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem>
              <ListItemText inset secondary="It is a product to help you find the local events near you, you can use the search Bar to help you reduce the event number. In the main page, you can click the link to find the go to the detail page, so on" />
            </ListItem>
            </List>
            </Collapse>
            <Divider />
            <Divider />
            <ListItem button>
            <Icon>power_settings_new</Icon>
              <ListItemText primary="Logout" />
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