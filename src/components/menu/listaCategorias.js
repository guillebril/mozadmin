import React from 'react';
import { SortableContainer} from 'react-sortable-hoc';
import RaisedButton from 'material-ui/RaisedButton';

import CategoriaContenedor from './categoriaContenedor';


//Este compoenente genera la categoria
const ListaCategorias = SortableContainer(({ categorias, onGestionarEdicionCategoria, onGestionarDisponibilidadCategoria , agregarCategoria, onBorrarCategoria }) => {
//Muestra la lista
  return(
    <div>
      <div>
         <RaisedButton
           label="Agregar Categoria"
           style={{float: 'left', display: 'block', marginLeft: '15px'}}
           onTouchTap={agregarCategoria}
           primary={true}
            />
          <br/><br/><br/>
      </div>
        <div className='categorias_tarjetas'>
  {
    categorias.map((value, index) => (

        <CategoriaContenedor key={value.key}
          index={index}
          value={value}
          onBorrarCategoria={onBorrarCategoria}
          onGestionarEdicionCategoria={onGestionarEdicionCategoria}
          onGestionarDisponibilidadCategoria={onGestionarDisponibilidadCategoria}
           />
    ))}

    </div>
  </div>
  );
});

export default ListaCategorias
