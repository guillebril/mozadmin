// Dependencias
import React, { Component } from 'react';
import AppBar  from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';


// Assets
//logo y css va aca

export default class NavTop extends Component {

  render() {
    return(
      <div className="rootcont" >


        <AppBar position="static">

          <Toolbar>
            <Typography type="title"  style={{flex: 1}} color="inherit">
              MozApp
            </Typography>
            <Link  to='/'>
              <Button color="default" > Mi Menu</Button>
            </Link>


            <Link to='/mesas'>
              <Button color="default" > Mesas</Button>
            </Link>
          </Toolbar>

        </AppBar>


      </div>

    );
  }
}
