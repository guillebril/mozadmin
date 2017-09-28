import React, {Component } from 'react';
import base from '../../rebase';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Producto from './producto.js';

class ListaProductos extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {pedidos:[]};
  }

  aceptarProducto(keyProducto)
  {
    this.setState({pedidos :{[keyProducto] : {estado : 'aceptado'}}});
  }
  cancelarProducto(keyProducto)
  {
    this.setState({pedidos :{[keyProducto] : {estado : 'cancelado'}}});
  }
//falta sincronizar con base de datos para obtener los pedidos, osea pararse arriba
//Uso re-base para sincronizar el estado del objeto mesas con la db
componentDidMount()
{
  base.syncState('restaurantes/oconnells/mesas/'+this.props.keyMesa+'/pedidos',
  {
    //cambien el bindToState por syncState
    context: this,
    state: 'pedidos',
    queries: {orderByChild: 'pos'},
    keepKeys: true,
    asArray: true
    //Ojo que lo cambie al asArray de true a false para ver si puedo encontrar el key del pedido y no tenerlo en un array
  });
}
  render()
  {
    //revisar este mapeo que esta mapeando mal
  var listaPedidos = Object.values(this.state.pedidos).map(( pedido, index ) => {
      return (
        //Revisar si esta bien esto de los key o va en un solo lado
        <ListItem key={pedido.key}>
            <Producto
            aceptarProducto={this.aceptarProducto.bind(this)}
            cancelarProducto={this.cancelarProducto.bind(this)}
            keyProducto={pedido.key}
            pedido={pedido}
            />
          </ListItem>
          )
    })
    return(
    <List>
      <Divider />
      {listaPedidos}
      <Divider />
    </List>
    )
  }
}
export default ListaProductos;
