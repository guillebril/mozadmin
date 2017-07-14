import React, { Component } from 'react';

export default class TituloCategoria extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: props.value,
      editando: false,
    };
    this.gestionarApertura=this.gestionarApertura.bind(this)
  }
  gestionarApertura = () =>{
    this.setState({open: !this.state.open})
   }

  render() {
    return(
      <p>{this.props.nombreCategoria}</p>
    );
  }
}
