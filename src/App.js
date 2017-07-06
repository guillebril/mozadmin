import React, { Component }
from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavTop from './components/navTop'
import Contenedor from './components/menu/contenedor'


class App extends Component {

  render() {
    return(
      <MuiThemeProvider>
        <div>
            <NavTop/>
            <Contenedor/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
