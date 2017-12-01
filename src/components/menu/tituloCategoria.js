import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import LocalDiningIcon from 'material-ui-icons/LocalDining';
import LocalDrinkIcon from 'material-ui-icons/LocalDrink';
import CheckIcon from 'material-ui-icons/Check';
import base from '../../rebase';

import Menu, { MenuItem } from 'material-ui/Menu';




export default class TituloCategoria extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
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
      {editandoCategoria :!this.state.editandoCategoria,
        open: false,
      }
    )
  }

 onGestionarEdicionCategoria = (event) =>{
   this.props.onGestionarEdicionCategoria (
     this.props.categoria.nombre,
     event.target.value,
     this.props.categoria.pos,
     event.target.name)

 }

  onAbrirMenu =(event) =>{
    this.setState({
      open: true,
      anchorEl: event.currentTarget
      }  )

}


      onCerrarMenu = () => {
          this.setState({
        open: false
        } )
      }


      gestionarEnter = (event) => {
      if(event.key === 'Enter'){
        this.setState({
          editandoCategoria: false

        });
      }
    }

 onBorrarCategoria = () => {
   const key = this.props.categoria.key
   base.remove('restaurantes/oconnells/menu/' + key);
}

  onCambiarTipoCategoria = (event) =>{
    //Forzamos el event.target.name porque no generamos el evento desde un textbox sino un span

    this.setState({
  open: false
  } )
  event.target.name="TipoCategoria";
    this.props.onGestionarEdicionCategoria(
      this.props.categoria.tipoCategoria,
      event.target.value,
      this.props.categoria.pos,
       event.target.name)


  }




  render(){
   let cambiarA = this.props.categoria.tipoCategoria === 'Comidas' ? 'Bebidas': 'Comidas'
  let iconoCategoria =  this.props.categoria.tipoCategoria === 'Comidas' ? <LocalDiningIcon/> :  <LocalDrinkIcon/>
  return(
    this.state.editandoCategoria
    ?
  <div style={{display: 'flex',
  justifyContent: 'space-between'}}>
    <TextField
      onKeyPress={this.gestionarEnter}
      autoFocus={true}
      name="TituloCategoria"
      id="TituloCategoria"
      value={this.props.categoria.nombre}
      onChange={this.onGestionarEdicionCategoria}
    />
    <IconButton
      className='checkIcono'
    tooltip="Guardar">
      <CheckIcon onTouchTap={this.onCambiarModoEdicion} />
      </IconButton>
  </div>

  :
  <div style={{display: 'flex',
  justifyContent: 'space-between'}}>

    <div style={{display: 'flex', alignItems: 'baseline'}} >
      <div>  {iconoCategoria}</div>

      <div style={{fontSize: '25px', fontWeight: 300,paddingLeft: '10px'}}>{this.props.categoria.nombre}</div>
    </div>

    <IconButton
      aria-owns={this.state.onAbrirMenu ? 'simple-menu' : null}
      aria-haspopup="true"
      onClick={this.onAbrirMenu}>
      <MoreVertIcon/>
    </IconButton>
    <Menu
      id="simple-menu"
      onRequestClose={this.onCerrarMenu}
      anchorEl={this.state.anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}

      transformOrigin={{
        vertical: '300',
        horizontal: 'left',
      }}

      open={this.state.open}>
      <MenuItem onClick={this.onCambiarModoEdicion}>Cambiar Nombre</MenuItem>
      <MenuItem onClick={this.onCambiarTipoCategoria}>Cambiar a {cambiarA}</MenuItem>
      <MenuItem onClick={this.onBorrarCategoria}>Eliminar</MenuItem>
    </Menu>
    </div>

    )
  }
}
