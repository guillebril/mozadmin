import React, { Component } from 'react';
import Categoria from './categoria'

//Este compoenente contiene a la lista de categorias
export default class Contenedor extends Component{
  render() {
    return(
      <div className='contenedor'>
        <Categoria/>
      </div>

    )
  }
}
