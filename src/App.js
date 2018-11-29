import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { HashRouter as Router, Route} from 'react-router-dom';

import './App.css';

import SimpleTabs from './Tabs';
import EventView from './EventView';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009bd1',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  },
  typography: {
    useNextVariants: true,
  }
});

const RouteWithProps = ({ component: Component, props, ...extraProps }) => (
  <Route
    {...extraProps}
    render={routeProps => <Component {...props} {...routeProps} />}
  />
);


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {query: null}
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>

          <RouteWithProps exact path='/' component={SimpleTabs} />
          <RouteWithProps path='/event/:id' component={EventView}/>
          <RouteWithProps path='/profile' component={SimpleTabs}/>

          {/*<RouteWithProps exact path='/about' component={About}/>*/}
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;