import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import base from '../../rebase';

import NavigationCheck from 'material-ui/svg-icons/navigation/check';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';



export default class TituloCategoria extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editandoCategoria: false,
      editandoTipoCategoria: false,
      nombre: props.categoria.nombre,
      tipoCategoria: props.categoria.tipoCategoria,
    };

    this.onBorrarCategoria=this.onBorrarCategoria.bind(this)
    this.onGestionarEdicionCategoria=this.onGestionarEdicionCategoria.bind(this)
  }

  onCambiarModoEdicion = () => {
    this.setState(
      {editandoCategoria : !this.state.editandoCategoria}
    )
  }

 onGestionarEdicionCategoria = (event) =>{
   this.props.onGestionarEdicionCategoria (
     this.props.categoria.nombre,
     event.target.value,
     this.props.categoria.pos,
     event.target.name)

 }

 onBorrarCategoria = () => {
   const key = this.props.categoria.key
   base.remove('restaurantes/oconnells/menu/' + key);
}

  onCambiarTipoCategoria = (event) =>{
    //Forzamos el event.target.name porque no generamos el evento desde un textbox sino un span
    event.target.name="TipoCategoria";
    this.props.onGestionarEdicionCategoria(
      this.props.categoria.tipoCategoria,
      event.target.value,
      this.props.categoria.pos,
       event.target.name)
  }




  render() {
  return(
    this.state.editandoCategoria
    ?
  <div style={{display: 'flex',
    justifyContent: 'space-between'}}>
        <TextField
          name="TituloCategoria"
          id="TituloCategoria"
          hintText="Hint Text"
          value={this.props.categoria.nombre}
          onChange={this.onGestionarEdicionCategoria}
          />
      <IconButton
          className='checkIcono'
          tooltip="Guardar">
          <NavigationCheck onTouchTap={this.onCambiarModoEdicion} />
      </IconButton>
  </div>

  :
  <div style={{display: 'flex',
    justifyContent: 'space-between'}}>
    <span>
      {this.props.categoria.nombre}
    </span>
    <span>
      ({this.props.categoria.tipoCategoria})
    </span>
    <IconMenu
       iconButtonElement={
         <IconButton>
           <MoreVertIcon/>
         </IconButton>}
       targetOrigin={{horizontal: 'right', vertical: 'top'}}
       anchorOrigin={{horizontal: 'right', vertical: 'top'}}>

       <MenuItem
         onTouchTap={this.onCambiarModoEdicion}
         primaryText="Cambiar Nombre"/>

       <MenuItem
         primaryText="Bebida/Comida"
         onTouchTap={this.onCambiarTipoCategoria}/>

       <MenuItem
         primaryText="Eliminar"
         onTouchTap={this.onBorrarCategoria}/>



   </IconMenu>
  </div>

    )
  }
}
