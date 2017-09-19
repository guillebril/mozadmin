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
//falta sincronizar con base de datos para obtener los pedidos, osea pararse arriba
//Uso re-base para sincronizar el estado del objeto mesas con la db
componentDidMount()
{

  base.bindToState('restaurantes/oconnells/mesas/'+this.props.keyMesa+'/pedidos',
  {
    context: this,
    state: 'pedidos',
    queries: {orderByChild: 'pos'},
    keepKeys: true,
    asArray: true
  });
}
  render()
  {
    //revisar este mapeo que esta mapeando mal
    console.log("State pedidos en render listaProductos:"+ this.state.pedidos);
    var listaPedidos = Object.values(this.state.pedidos).map(( pedido, index ) => {
      return (
        //Revisar si esta bien esto de los key o va en un solo lado
        <ListItem key={pedido.key}>
            <Producto keyProducto={pedido.key} pedido={pedido}/>
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
