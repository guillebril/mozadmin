import React from 'react';
import { SortableElement} from 'react-sortable-hoc';
import ItemProducto from './itemProducto';

//Este componente  genera los items de la lista. Es stateless
const ProductoContenedor = SortableElement(({ value, index, onGestionarEdicion, agregarProducto, onGestionarDisponibilidad , onBorrar }) =>
  <div>
  <ItemProducto
    value={value}
    index={index}
    onBorrar={onBorrar}
    onGestionarEdicion={onGestionarEdicion}
    onGestionarDisponibilidad={onGestionarDisponibilidad}
/>
  </div>
);

export default ProductoContenedor
