import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import IconButton from 'material-ui/IconButton';
import DoneIcon from 'material-ui-icons/Done';
import CloseIcon from 'material-ui-icons/Close';
import moment from 'moment'
import Moment from 'react-moment'

export default class Producto extends Component {
  constructor(props) {

    super(props);
    this.state = {
      open: props.value === "",
      value: props.value,
      editando: true,
    };
  }

  gestionarApertura = () => {
    this.setState({ open: !this.state.open })
  }

  AceptarPedido = () => {
    this.props.aceptarProducto(this.props.pedido.key);
  }

  CancelarPedido = () => {
    this.props.cancelarProducto(this.props.pedido.key);
  }

  onGestionarEdicion = (nuevo) => {
    console.log("entro en producto onGestionarEdicion" + this.props.pedido.key + nuevo.target.name + nuevo.target.value);
    this.props.onGestionarEdicion(this.props.pedido.key, nuevo.target.name, nuevo.target.value);
    //Agregar un if y averiguar si cambio la cantidad, y recalcular el precio total
  }

  render()
  //  "Mon Nov 27 2017 21:14:19 GMT-0300 (-03)"
  {
    var antiguedadPedido = moment(this.props.pedido.horario, "ddd MMM DD YYYY HH:mm:ss")
    var estiloInfoProd;
    if (this.props.pedido.estado === 'cancelado') {
      estiloInfoProd = { textDecorationLine: "line-through" };
    } else {
      estiloInfoProd = {};
    }

    return (
      <div style={estiloInfoProd}>

        <div style={{
          width:'470px',
          display:'flex',
          margin: '10px 0',
          flexDirection:'row',
          justifyContent: 'space-between',
        alignItems: 'center', lineHeight: '20px'}}>
          <div style={{flexBasis:'8%', fontSize: '35px', paddingLeft: '5px', fontWeight: '300'}}>
            6
          </div>

          <div style={{ flexBasis:'60%', flexDirection:'column'}}>
            <div style={{ fontWeight:'600'}}>
              <span style={{ color:'#FB9233', paddingRight: '4px'}} >
                {this.props.pedido.cantidad}
              </span>
              {this.props.pedido.producto}
            </div>

            {this.props.pedido.comentarios === '' ? null: <div>{this.props.pedido.comentarios}</div>}

            <div style={{ fontWeight:'500', color: '#999', fontSize: '13px'}} >
              <Moment fromNow>
                {antiguedadPedido}
              </Moment>
              <Moment format=" (HH:mm)">
                {antiguedadPedido}
              </Moment>
            </div>
          </div>
          <div  style={{flexBasis:'5%', fontWeight:'300', color: '#aaa', fontSize: '16px'}}> ${this.props.pedido.total}</div>
          <div style={{flexBasis:'10%' }}>

            <IconButton  style={{fontSize: '2.2rem',  color:'#E04C5E'}}  aria-label="Cancelar"  onTouchTap={this.CancelarPedido}  color="primary">
              <CloseIcon />
            </IconButton>
          </div>
          <div style={{flexBasis:'10%'}}>

            <IconButton style={{fontSize: '2.2rem', color:'#33C66E' }} aria-label="Aceptar"  onTouchTap={this.AceptarPedido}  color="primary">
              <DoneIcon />
            </IconButton>

          </div>

        </div>
        <Divider/>
      </div>
    )
  }
}