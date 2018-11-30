import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';
import moment from '../node_modules/moment';

import { Link } from "react-router-dom";

const events = require('./mock-data/events.json');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  layout: {
    width: 'auto',    
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    marginTop: theme.spacing.unit *3,
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    // backgroundColor: theme.palette.grey[800],
    // color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 1,
    paddingBottom: 0,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 2}px`,
    paddingLeft: 0,
    paddingBottom: 0,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 1,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor:  theme.palette.primary.main,
    fontSize: 25,
    color: theme.palette.grey[50],
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  slogan: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Great Vibes',
  },
  mainImage: {
    borderRadius: 5,
    width: '100%',
    height: '60vh',
  },
  socialLink: {
    color: '#424242',
    textDecoration: 'none',
  }
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

  getDate(datetime) {
    return moment(datetime).format('dddd, MMM Do');
  }

  getTime(datetime) {
    return moment(datetime).format('h:mm a');
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
          </Toolbar>
        </AppBar>

        <span></span>        
        <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <main>
          {/* Main featured post */}
          <div className={classes.mainFeaturedPost}>
            <img className={classes.mainImage} src={`./${eventObj.image}`} />
            <Grid container>
              <Grid item >
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    {eventObj.name}
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    {this.getDate(eventObj.start)} 
                    <span> {this.getTime(eventObj.start)} </span> 
                    @ {eventObj.location} 
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                Detail
              </Typography>
              <Divider />
              <p> 
                {eventObj.description}
              </p>
              <Typography variant="h6" gutterBottom>
                Outer Link
              </Typography>
              <Divider />
                <p>
                  <a target="_blank" href={eventObj.url}>
                    {eventObj.url}
                  </a>
                </p>              
              <Typography variant="h6" gutterBottom>
                Fee
              </Typography>
              <Divider />
              <p> 
                ${eventObj.cost}
              </p>
            </Grid>            
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Volumes Bookcafe is Wicker Park's new neighborhood independent bookstore cafe.
                  With heavily curated shelves of books, and a tasty menu of baked goods, quality
                  espresso drinks and an array of local beer and wine, we aim to create a warm and
                  inviting community space for book lovers of all ages.
                </Typography>
              </Paper>              
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              <Typography>
                <a className={classes.socialLink} target="_blank"
                href="https://www.facebook.com/volumesbooks/">Facebook</a>
              </Typography>
              <Typography>
                <a className={classes.socialLink} target="_blank"
                href="https://twitter.com/volumesbooks?lang=en">Twitter</a>
              </Typography>
              {
                //social.map(network => (
                //<Typography key={network}>{network}</Typography>
                //))
              }
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </div>
      {/* Footer */}
      <footer className={classes.footer}>        
        <Typography variant="h6" color="inherit" className={classes.grow}>
          <div className="logo">Chindig</div>
          <div className={classes.slogan}>Find your community</div>
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>

      </div>
    );
  }
}

EventView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventView);
