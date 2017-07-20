// Dependencias
import React, { Component } from 'react';
import AppBar  from 'material-ui/AppBar';
import { Link } from 'react-router-dom';


// Assets
//logo y css va aca
	
export default class NavTop extends Component {

  render() {
    return(
      <div className="rootcont" >
        <AppBar
        title="MozApp"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        >   
        <Link to='/'>Menu</Link>    
        <Link to='/mesas'>Mesas </Link>
        </AppBar>
      </div>

    );
  }
}
