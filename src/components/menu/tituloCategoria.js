import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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
      <div>
        <span>
          {this.props.nombreCategoria}
        </span>
        <IconMenu
           iconButtonElement={
             <IconButton><MoreVertIcon /></IconButton>
           }
           targetOrigin={{horizontal: 'right', vertical: 'top'}}
           anchorOrigin={{horizontal: 'right', vertical: 'top'}}
         >
         <MenuItem primaryText="Modificar" />
         <MenuItem primaryText="Eliminar" />
       </IconMenu>
      </div>
    );
  }
}
