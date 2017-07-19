import React, { Component } from 'react';
import Categorias from './categorias';
import PropTypes from 'prop-types';

//Este compoenente contiene a la lista de categorias
class Contenedor extends Component{
	  static propTypes = {
    body: PropTypes.object.isRequired
  };
  render() {
  	 const { body } = this.props;

    return(
      <div className='contenedor'>
            {body}
        <Categorias/>
      </div>
    )
  }
}

export default Contenedor;