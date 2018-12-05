import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import GearIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import FilterIcon from '@material-ui/icons/FilterList';
import Tooltip from '@material-ui/core/Tooltip';


// should be component
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import moment from 'moment';

// should also be component
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';

import Chip from '@material-ui/core/Chip';
//import Select from 'react-select';



import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hidden from '@material-ui/core/Hidden';

import Settings from './Settings';

const events = require('./mock-data/events.json');


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    marginLeft: '10%'
  },
  menuButton: {
    marginLeft: -12,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },

  // chips
  chip: {
    margin: theme.spacing.unit,
  },
});

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    let sDate = moment(new Date());
    let eDate = moment(sDate);
    sDate.subtract(1, 'months');
    eDate.add(3, 'months');

    // get unique types
    let types = events
        .map(e => e.tag)
        .filter((val, i, self) => self.indexOf(val) === i );
    types = types.map(name => { return {label: name}; });
    types = types.slice(0, 6)

    this.state = {
      showSearch: false,
      showSettings: false,
      startDate: sDate,
      endDate: eDate,
      types: types

    };
  }

  handleChange = event => {
    let query = event.target.value

    this.setState({isLoading: true});

    setTimeout(() => {
      this.props.onSearch(query)
      this.setState({isLoading: false});
    }, Math.random() * (500 - 250) + 250)
  };

  toggleSearch = () => {
    this.setState(oldState => ({
      showSearch: !oldState.showSearch
    }));
  }

  openFilters = () => {
    this.setState({ showFilters: true });
  }


  onFiltersClose = () => {
    this.setState({ showFilters: false });
  }



  openSettings = () => {
    this.setState({ showSettings: true });
  };

  onSettingsClose = () => {
    this.setState({ showSettings: false })
  }

  onStartDateChange = (e) => {
    e.preventDefault()
  }

  onEndDateChange = (e) => {
    e.preventDefault()
  }

  onTypeClick = (e) => {
    let name = e.target.innerHTML;

    let types = this.state.types;

    types.forEach((type, i) => {
      if (type.label == name) type.selected = !type.selected;
    })

    this.setState({types, isLoading: true})

    setTimeout(() => {
      this.props.onFilter({types: types.filter(t => t.selected).map(t => t.label)});
      this.setState({isLoading: false});
    }, Math.random() * (500 - 250) + 250)
  }


  render() {
    const { classes} = this.props;
    const { showSearch, showSettings, showFilters, isLoading } = this.state;

    const fullList = (
      <div className={classes.fullList}>
        <List>

        <ListItem>
          <ListItemIcon><CalendarIcon /></ListItemIcon>
          <ListItemText primary={'By Date'} />

          <div style={{float: 'left'}}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={this.state.startDate} onChange={this.onStartDateChange} label="From"/>
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <DatePicker value={this.state.endDate} onChange={this.onEndDateChange}
              placeholder="select end date..." label="To" style={{marginLeft: '10px'}} />
          </MuiPickersUtilsProvider>
          </div>
        </ListItem>


        </List>
        <Divider />

        <ListItem>
          <ListItemIcon><CalendarIcon /></ListItemIcon>
          <ListItemText primary={'By Type'} />

          {this.state.types.map((t, i) => {
            return <Chip label={t.label}
                className={`chip ${classes.chip} ${t.selected ? 'chip-selected' : ''}`}
                onClick={this.onTypeClick}
                variant="outlined"
                key={i}/>
          })}


        </ListItem>



      </div>
    );




    return (
      <div className={classes.root}>
        <AppBar position="static" style={{paddingTop: isLoading ? '' :'5px', marginTop: '-5px'}}>
          {isLoading && <LinearProgress color="secondary" style={{top: '5px'}} />}
          <Toolbar>

            <IconButton onClick={this.openSettings} className={classes.menuButton} color="inherit" aria-label="Settings Menu">
              <GearIcon />
            </IconButton>

            {
              !showSearch &&
              <Typography variant="h6" color="inherit" className={`${classes.grow} classes.logo`}>
                <div className="logo">Chindig</div>
              </Typography>
            }


            {/* desktop */}
            <Hidden smDown>
              <Tooltip title="Filter/sort events">
                <IconButton onClick={this.openFilters} color="inherit" aria-label="Filter options">
                  <FilterIcon />
                </IconButton>
              </Tooltip>

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                 <InputBase
                  onChange={this.handleChange}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>

            </Hidden>

            {/* mobile */}
            {
              showSearch &&
                <Hidden mdUp>
                  <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    onChange={this.handleChange}
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>

              </Hidden>
            }

            {
              !showSearch &&
              <Hidden mdUp>
                <Tooltip title="Filter/sort events">
                  <IconButton onClick={this.openFilters} color="inherit" aria-label="Filter options">
                    <FilterIcon />
                  </IconButton>
                </Tooltip>

                <IconButton className={classes.menuButton} color="inherit" aria-label="open search" onClick={this.toggleSearch}>
                  <SearchIcon />
                </IconButton>
              </Hidden>
            }

            {
              showSearch &&
              <IconButton className={classes.menuButton} color="inherit" aria-label="close search" onClick={this.toggleSearch}>
                <CloseIcon />
              </IconButton>
            }


            <Settings open={showSettings} onClose={this.onSettingsClose} />


          </Toolbar>
        </AppBar>


        <Drawer anchor="top" open={showFilters} onClose={this.onFiltersClose}>
          <div
            tabIndex={0}
            variant="persistent"
            role="button"
            onClick={this.onFiltersClose}
            onKeyDown={this.onFiltersClose}
          >
            {fullList}
          </div>
        </Drawer>

      </div>
    );
  }

}


Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
