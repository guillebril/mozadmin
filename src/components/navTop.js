import '../App.css';
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';


export default class NavTop extends Component {
  render() {
    return(
      <div className="rootcont" >
        <AppBar
        title="Diego Genio!"
        iconClassNameRight="muidocs-icon-navigation-expand-more"/>
      </div>

    );
  }
}
