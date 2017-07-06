import '../App.css';
import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';




const styles = {
  rootcont: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};


export default class Nav extends Component {

  render() {

    return(

      <div style={styles.rootcont}>
        <AppBar
        title="Diego Genio!"
        iconClassNameRight="muidocs-icon-navigation-expand-more"/>


        </div>

    );
  }
}
