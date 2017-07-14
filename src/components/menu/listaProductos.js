import React from 'react';
import { SortableContainer, } from 'react-sortable-hoc';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import TituloCategoria from './tituloCategoria';
import ProductoContenedor from './productoContenedor'

//Este compoenente genera la categoria
const ListaProductos = SortableContainer(({ items, nombreCategoria, onGestionarEdicion, onGestionarDisponibilidad , agregarProducto, onBorrar }) => {
//Muestra la lista
  return(
    <List>
      <Subheader>
        <TituloCategoria
        nombreCategoria={nombreCategoria}/>
      </Subheader>

      {
        items.map((value, index) => (
            <ProductoContenedor
              key={value.key}
              index={index}
              value={value}
              onBorrar={onBorrar}
              onGestionarEdicion={onGestionarEdicion}
              onGestionarDisponibilidad={onGestionarDisponibilidad}
               />
        ))}
        <br/>
        <FlatButton label="Agregar Producto" onTouchTap={agregarProducto} primary={true} />
      </List>
  );
});


export default ListaProductos
