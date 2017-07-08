import React, { Component } from 'react';
import Categorias from './categorias'

//Este compoenente contiene a la lista de categorias
export default class Contenedor extends Component{
  render() {
    return(
      <div className='contenedor'>
        <Categorias/>
      </div>

    )
  }
}
