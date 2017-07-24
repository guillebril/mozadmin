import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Este compoenente contiene a la lista de categorias
class Contenedor extends Component{
	  static propTypes = {
    body: PropTypes.object.isRequired
  };
  render() {
  	 const { body } = this.props;

// saque de adentro del div esto   <Categorias/>
    return(
      <div className='contenedor'>
            {body}
      </div>
    )
  }
}

export default Contenedor;
