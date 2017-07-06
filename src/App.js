import React, { Component }
from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './components/navegaciontop'
import Contenedor from './components/menu/contenedor'


class App extends Component {

  render() {
    return(
      <MuiThemeProvider>
      <div>
          <Nav/>
          <Contenedor/>
      </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
