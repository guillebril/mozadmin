import React, { Component } from 'react';
import base from '../../rebase';
import List from 'material-ui/List';

import Divider from 'material-ui/Divider';
import Producto from './producto.js';

export default class ListaPedidosAClasificar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pedidos: [],
      todasLasMesas: [],
      total: ""
    };

  }
  aceptarProducto(keyProducto, mesaKey) {
    let todasLasMesas = this.state.todasLasMesas
    this.state.todasLasMesas[mesaKey].pedidos[keyProducto].estado = 'aceptado'
    this.setState({ todasLasMesas });

  }
  cancelarProducto(keyProducto, mesaKey) {
    let todasLasMesas = this.state.todasLasMesas
    this.state.todasLasMesas[mesaKey].pedidos[keyProducto].estado = 'cancelado'
    this.setState({ todasLasMesas });
  }

  //Uso re-base para sincronizar el estado del objeto mesas con la db
  componentDidMount() {

    base.syncState('restaurantes/oconnells/mesas/', {
      //cambien el bindToState por syncState
      context: this,
      state: 'todasLasMesas',
      queries: { orderByChild: 'pos' },
      keepKeys: true,
      asArray: false
    });

  }
  render() {

    var listaMesasNuevas = Object.values(this.state.todasLasMesas)
      .map((mesa, index) => {
        if (mesa.pedidos != null) {
          var listaPedidos = Object.entries(mesa.pedidos)
            .filter(pedido => pedido[1].estado === "Pedido")
            .map(([key, pedido], index) => {
              return (
                <Producto
                key={key}
                aceptarProducto={this.aceptarProducto.bind(this)}
                cancelarProducto={this.cancelarProducto.bind(this)}
                keyProducto={key}
                mesaKey={pedido.mesaKey}
                pedido={pedido}
                />
              )

            })

          return (listaPedidos)

        } else { null }

      })

    var listaMesasViejas = Object.values(this.state.todasLasMesas)
      .map((mesa, index) => {
        if (mesa.pedidos != null) {
          var listaPedidos = Object.entries(mesa.pedidos)
            //pedido es una matriz que tiene dos columnas en la 0 estan los keys en la 1 esta el objeto del pedido.
            .filter(pedido => pedido[1].estado !== "Pedido")
            .reverse().map(([key, pedido], index) => {
              return (
                <Producto
                  key={key}
                  aceptarProducto={this.aceptarProducto.bind(this)}
                  cancelarProducto={this.cancelarProducto.bind(this)}
                  keyProducto={key}
                  mesaKey={pedido.mesaKey}
                  pedido={pedido}/>
              )
            })

          return (listaPedidos)

        } else { null }
      })

    //hacer scrollable la lista de abajo
    return (
      <List>
      <h1 style={{fontWeight:'300'}}>Nuevos pedidos sin revisar</h1>
      {listaMesasNuevas}

      <br/>
      <br/>
      <h1 style={{fontWeight:'300'}}>Pedidos revisados</h1>
      {listaMesasViejas}
      <Divider />
    </List>
    )
  }
}
