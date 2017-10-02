import React, {Component } from 'react';
import base from '../../rebase';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Producto from './producto.js';

class ListaPedidosAClasificar extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      pedidos:[],
      total:""
     };

  }
          aceptarProducto(keyProducto)
            {
              this.setState({pedidos :{[keyProducto] : {estado : 'aceptado'}}});
              //this.sumarTotales();
            }
            cancelarProducto(keyProducto)
            {
              this.setState({pedidos :{[keyProducto] : {estado : 'cancelado'}}});
              //this.sumarTotales();
            }

            sumarTotales()
            {
              var totalPedidos = 0;
              for(var i in this.state.pedidos)
              {
                if(this.state.pedidos[i].estado==="aceptado")
                {
                  totalPedidos = totalPedidos + this.state.pedidos[i].total;
                }
              }
              //Falta setearlo en el estado total, adentro de la cuenta, no de pedidos.
              // Este setea adentro de pedidos, y no esta bien.
              //this.setState({pedidos: {total : totalPedidos}});
            }

//falta sincronizar con base de datos para obtener los pedidos, osea pararse arriba
//Uso re-base para sincronizar el estado del objeto mesas con la db
componentDidMount()
{
  base.syncState('restaurantes/oconnells/mesas/'+'-Kti1MOdTgkw0HwEH7Bh'+'/pedidos',
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
        <ListItem 
        className="ListaPedidosNuevos"
        key={pedido.key}>
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
export default ListaPedidosAClasificar;
