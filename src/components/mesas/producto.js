import React, {Component } from 'react';
import base from '../../rebase';
import {  ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Time from 'react-time';
import RaisedButton from 'material-ui/RaisedButton';
//import ActionDelete from 'material-ui/svg-icons/action/delete';
//import Toggle from 'material-ui/Toggle';

class Producto extends Component
{
  constructor(props) {

    super(props);
    this.state = {
      open: props.value === "",
      value: props.value,
      editando: true,
    };
    }

    gestionarApertura = () =>{
      this.setState({open: !this.state.open})
     }

    AceptarPedido = () =>{
      this.props.aceptarProducto(this.props.pedido.key);
    }

    CancelarPedido = () =>{
    this.props.cancelarProducto(this.props.pedido.key);
    }
  render()
  {
    const style = {
    margin: 12,

    div: {
       marginBottom: 16,
     },
     vista_lista_productos:{},
   };

   var estiloInfoProd ;
    if(this.props.pedido.estado==='cancelado')
    {
      estiloInfoProd ={display:"flex",alignItems:"baseline",textDecorationLine:"line-through"};
    }
    else
    {
      estiloInfoProd = {display:"flex",alignItems:"baseline"};
    }
    
    return(
      <div style={estiloInfoProd}>

      <div className="horario_producto_pedido">
        <Time value={this.props.pedido.horario} format="HH:MM" />
      </div>

      <ListItem
        open={this.state.open}
        onNestedListToggle={this.gestionarApertura}
        secondaryTextLines={2}
        disabled={this.state.open}
        className='editar_producto'
        hoverColor={'rgba(0,0,0,0)'}
        primaryText={

        this.state.open ?

        <div className="menu_editar_producto">
          <div className="item_editar_nombre">
            <TextField
            hintText="Producto"
            fullWidth={true}
            name='nombre'/>
          </div>
        </div>

        :
        <div className='vista_rectangulo_producto'>
        <div className='vista_nombre_comentario' >
            <div className="item_nombre">
              {this.props.pedido.producto}
            </div>

            <div className='vista_descrip_precio'>
              <div className="item_comentario">
                {this.props.pedido.comentarios}
              </div>
            </div>
          </div>
        <div className='vista_cantidad_precio' >
            <div className="item_cantidad">
            Cant: {this.props.pedido.cantidad}
            </div>
            <div className="item_precio">
              ${this.props.pedido.total}
            </div>
        </div>

        </div>
        }

      nestedItems={[
        <ListItem
          style={{marginLeft: '0', paddingTop: '0'}}
          key={1}
          disabled={true}
        />,
      ]}>
        </ListItem>

        <div className="aceptar_cancelar_pedido">
          <div className="aceptar">
          <RaisedButton label="Aceptar"
          primary={true}
          onTouchTap={this.AceptarPedido} />
          </div>
          <div className="cancelar">
          <RaisedButton label="Cancelar" primary={true}
          onTouchTap={this.CancelarPedido} />
          </div>
        </div>
      </div>
    )
  }
}
export default Producto;


//<div style={style}>20:15</div>
//<div style={style}>  Producto 2</div>
