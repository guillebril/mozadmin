import React, {Component } from 'react';
import base from '../../rebase';
import List from 'material-ui/List';

import Divider from 'material-ui/Divider';
import Producto from './producto.js';

export default class ListaPedidosAClasificar extends Component{
      constructor(props)
      {
        super(props);
        this.state = {
          mesas:[],
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



//falta sincronizar con base de datos para obtener los pedidos, osea pararse arriba
//Uso re-base para sincronizar el estado del objeto mesas con la db
componentDidMount()
{
  base.syncState('restaurantes/oconnells/mesas',
  {
    //cambien el bindToState por syncState
    context: this,
    state: 'mesas',
    keepKeys: true,
    asArray: true
    //Ojo que lo cambie al asArray de true a false para ver si puedo encontrar el key del pedido y no tenerlo en un array
  });

  // base.syncState('restaurantes/oconnells/mesas/-Kti1MOdTgkw0HwEH7Bh/pedidos',
  // {
  //   //cambien el bindToState por syncState
  //   context: this,
  //   state: 'pedidos',
  //   queries: {orderByChild: 'pos'},
  //   keepKeys: true,
  //   asArray: true
  //   //Ojo que lo cambie al asArray de true a false para ver si puedo encontrar el key del pedido y no tenerlo en un array
  // });
}
  render()
  {
    var listaMesas = Object.values(this.state.mesas)
          .map(( mesa, index ) => {

          var listaPedidosNuevos = Object.values(mesa.pedidos)
          .filter(pedido => pedido.estado === "Pedido")
            .map ((pedido, index) => {
                  return (
                      <Producto
                        key={pedido.key}
                        aceptarProducto={this.aceptarProducto.bind(this)}
                        cancelarProducto={this.cancelarProducto.bind(this)}
                        keyProducto={pedido.key}
                        pedido={pedido}
                        />
                        )
            })

          return listaPedidosNuevos
          })

    var listaMesasViejas = Object.values(this.state.mesas)
          .map(( mesa, index ) => {

          var listaPedidosViejos = Object.values(mesa.pedidos)
          .filter(pedido => pedido.estado !== "Pedido")
            .map ((pedido, index) => {
                  return (
                      <Producto
                        key={pedido.key}
                        aceptarProducto={this.aceptarProducto.bind(this)}
                        cancelarProducto={this.cancelarProducto.bind(this)}
                        keyProducto={pedido.key}
                        pedido={pedido}
                        />
                        )
            })
          return listaPedidosViejos
          })

  // var listaPedidosNuevos = Object.values(this.state.pedidos)
  //       .filter(pedido => pedido.estado === "Pedido")
  //       .map(( pedido, index ) => {
  //
  //     return (
  //         <Producto
  //           key={pedido.key}
  //           aceptarProducto={this.aceptarProducto.bind(this)}
  //           cancelarProducto={this.cancelarProducto.bind(this)}
  //           keyProducto={pedido.key}
  //           pedido={pedido}
  //           />
  //           )
  //
  //   })
    // var listaPedidosViejos = Object.values(this.state.pedidos)
    // .filter(pedido => pedido.estado !== "Pedido")
    // .reverse().map(( pedido, index ) => {
    //       return(
    //         <Producto
    //           key={pedido.key}
    //           aceptarProducto={this.aceptarProducto.bind(this)}
    //           cancelarProducto={this.cancelarProducto.bind(this)}
    //           keyProducto={pedido.key}
    //           pedido={pedido}
    //         />
    //       )
    //   })

      //hacer scrollable la lista de abajo
    return(
    <List>
      <h1 style={{fontWeight:'300'}}>Nuevos pedidos sin revisar</h1>
      {listaMesas}
      <br/>
      <br/>
      <h1 style={{fontWeight:'300'}}>Pedidos revisados</h1>
      {listaMesasViejas}
      <Divider />
    </List>
    )
  }
}
