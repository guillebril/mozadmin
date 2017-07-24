import React from 'react';
import { SortableContainer, } from 'react-sortable-hoc';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';

import TituloCategoria from './tituloCategoria';
import ProductoContenedor from './HOC_productoContenedor'

//Este compoenente genera la categoria
const ListaProductos = SortableContainer(({ items, categoria ,nombreCategoria, onGestionarEdicion, onGestionarDisponibilidad , onGestionarEdicionCategoria, agregarProducto, onBorrar, onBorrarCategoria }) => {
//Muestra la lista
  return(
    <List>
      <Subheader>
        <TituloCategoria
        categoria={categoria}
        onBorrarCategoria={onBorrarCategoria}
        onGestionarEdicionCategoria={onGestionarEdicionCategoria}
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
