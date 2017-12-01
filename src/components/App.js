// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import NavTop from './navTop/navTop'
import Contenedor from './menu/contenedor'

import './App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

//este children es el componente que genera el router de routes
  render() {
    const { children } = this.props;
    const theme = createMuiTheme({

});
    return(
      <MuiThemeProvider  theme={theme}>
        <div className="App">
          <NavTop/>
          <Contenedor body={children}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
