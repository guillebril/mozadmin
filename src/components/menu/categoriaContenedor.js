import React from 'react';
import { SortableElement} from 'react-sortable-hoc';
import ItemCategoria from './itemCategoria';

//Este componente  genera los categorias de la lista. Es stateless
const CategoriaContenedor = SortableElement(({ value, index, onGestionarEdicionCategoria, agregarCategoria, onGestionarDisponibilidadCategoria , onBorrarCategoria, categoriaKey }) =>
  <div >
  <ItemCategoria
    categoriaKey={value.key}
    nombreCategoria={value.nombre}
    value={value}
    index={index}
    onBorrarCategoria={onBorrarCategoria}
    onGestionarEdicion={onGestionarEdicionCategoria}
    onGestionarDisponibilidadCategoria={onGestionarDisponibilidadCategoria}
/>
  </div>
);

export default CategoriaContenedor
