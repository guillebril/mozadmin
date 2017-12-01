import React from 'react';
import {SortableElement} from 'react-sortable-hoc';
import ItemCategoria from './itemCategoria';

//Este componente  genera los categorias de la lista. Es stateless
const CategoriaContenedor = SortableElement(({ categoria, index, onGestionarEdicionCategoria,
  agregarCategoria, onGestionarDisponibilidadCategoria , onBorrarCategoria, categoriaKey }) =>{
  return(
    <div>
      <ItemCategoria
        categoriaKey={categoria.key}
        nombreCategoria={categoria.nombre}
        categoria={categoria}
        index={index}
        onBorrarCategoria={onBorrarCategoria}
        onGestionarEdicion={onGestionarEdicionCategoria}
        onGestionarEdicionCategoria={onGestionarEdicionCategoria}
        onGestionarDisponibilidadCategoria={onGestionarDisponibilidadCategoria}
      />
    </div>
  )
});

export default CategoriaContenedor
