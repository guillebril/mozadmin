import React, {Component } from 'react';
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

  render()
  {
    //revisar este mapeo que esta mapeando mal
    var listaPedidos = Object.values(this.state.pedidos).map(( pedido, index ) => {
      return (

        <ListItem>
            <Producto key={pedido.key} pedido={pedido}/>
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
