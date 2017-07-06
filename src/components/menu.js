import React, { Component }
from 'react';
import base from '../rebase'


export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantes: []
    };
  }

  componentDidMount() {
    // convierto el objeto a array y le hago a doble binding
    base.syncState('restaurantes/', {
      context: this,
      state: 'restaurantes',
      asArray: true
    });
  }

  render() {

    var restaurantes = this.state.restaurantes.map((item, index) => {
      return(
        <div key={item.key} className='producto_item'>
          <div>
          <div className='producto_item_nombre'>{item.name}</div>
          <div className='producto_item_descripcion'>Jamon, queso, tomate,lechuga Lorem ipsu sit emet Mayonesa</div>
          </div>
          <div className='producto_item_precio'>$32</div>
        </div>
      )
    })

    return(
      <div>
          {restaurantes}
      </div>

    );
  }

}
