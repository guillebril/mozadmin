import React from 'react';
import { SortableContainer, } from 'react-sortable-hoc';
import  List  from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Button from 'material-ui/Button';

import TituloCategoria from './tituloCategoria';
import ProductoContenedor from './HOC_productoContenedor'

//Este compoenente genera la categoria
const ListaProductos = SortableContainer(({ items, categoria ,nombreCategoria, onGestionarEdicion, onGestionarDisponibilidad , onGestionarEdicionCategoria, agregarProducto, onBorrar, onBorrarCategoria }) => {
//Muestra la lista
  return(
    <List>
      <ListSubheader>
        <TituloCategoria
          categoria={categoria}
          onBorrarCategoria={onBorrarCategoria}
          onGestionarEdicionCategoria={onGestionarEdicionCategoria}
          nombreCategoria={nombreCategoria}/>
      </ListSubheader>

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
      <Button color='primary' style={{marginLeft:'10px'}} onTouchTap={agregarProducto} >
      Agregar Producto
      </Button>
      </List>
  );
});


export default ListaProductos
