import React, {Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Producto from './producto.js';

class ListaProductos extends Component
{
  render()
  {
    return(
    <List>
      <Divider />
      <ListItem>
        <Producto/>
      </ListItem>
      <Divider />
      <ListItem>
        <Producto/>
      </ListItem>
      <Divider />
      <ListItem>
        <Producto/>
      </ListItem>
      <Divider />
    </List>
    )
  }
}
export default ListaProductos;
