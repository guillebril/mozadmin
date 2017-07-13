import React from 'react';
import { SortableContainer, } from 'react-sortable-hoc';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import ProductoContenedor from './productoContenedor'

//Este compoenente genera la categoria
const ListaProductos = SortableContainer(({ items, onGestionarEdicion, onGestionarDisponibilidad , agregarProducto, onBorrar }) => {
//Muestra la lista
  return(
    <List>
      <Subheader>Cervezas
        <FloatingActionButton
          style={{float: 'right',}}
          onTouchTap={agregarProducto}>
        <ContentAdd />
      </FloatingActionButton>

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
  </List>
  );
});


export default ListaProductos
