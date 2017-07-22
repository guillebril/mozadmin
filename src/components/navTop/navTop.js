import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';


export default class NavTop extends Component {
  render() {
    return(
      <div className="rootcont" >
        <AppBar
        title="MozApp"
        iconClassNameRight="muidocs-icon-navigation-expand-more"/>
      </div>

    );
  }
}
