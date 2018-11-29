import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

import { Link } from "react-router-dom";

const events = require('./mock-data/events.json');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class EventView extends React.Component {

  // initialize any state needed here
  constructor(props) {
    super(props);

    let eventName = this.props.match.params.id;
    let eventObj = events.filter(e => e.name === eventName)[0]

    this.state = {
      eventObj
    }
  }


  render() {
    const { classes } = this.props;
    const { eventObj } = this.state;

    console.log('eventObj', eventObj)


    return (
      <div className={classes.root}>

        <AppBar position="static">
          <Toolbar>
            <Link to={'/'}>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Settings Menu">
                <ArrowBack />
              </IconButton>
            </Link>


            <Typography variant="h6" color="inherit" className={classes.grow}>
              <div className="logo">Chindig</div>
            </Typography>
            <span> | </span>

            {eventObj.name}


          </Toolbar>
        </AppBar>

        {eventObj.namne}
        {eventObj.url}

      </div>
    );
  }
}

EventView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventView);
