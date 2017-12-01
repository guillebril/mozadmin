import React from 'react';
import { SortableContainer} from 'react-sortable-hoc';
import Button from 'material-ui/Button';

import CategoriaContenedor from './HOC_categoriaContenedor';


//Este compoenente genera la categoria
const ListaCategorias = SortableContainer(({ categorias, onGestionarEdicionCategoria, onGestionarDisponibilidadCategoria , agregarCategoria, onBorrarCategoria }) => {
//Muestra la lista
  return(
    <div>
      <div>
        <Button
          raised

          style={{float: 'left', display: 'block', marginLeft: '15px', marginTop: '20px',}}
          onTouchTap={agregarCategoria}

        >Agregar Categoria</Button>
          <br/><br/><br/>
      </div>

        <div className='categorias_tarjetas'>
  {
    categorias.map((categoria, index) => (
        <CategoriaContenedor
          key={categoria.key}
          index={index}
          categoria={categoria}
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
