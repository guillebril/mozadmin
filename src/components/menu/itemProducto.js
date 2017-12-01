import React, { Component } from 'react';
import List,{  ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Collapse from 'material-ui/transitions/Collapse';
import Input, {  InputAdornment } from 'material-ui/Input';
import DeleteIcon from 'material-ui-icons/Delete'
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

import Switch from 'material-ui/Switch';


export default class ItemProducto extends Component {
  constructor(props) {

    super(props);
    this.state = {
      open: props.value.nombre === "",
      value: props.value,

      editando: true,
    };
    this.gestionarApertura=this.gestionarApertura.bind(this)
  }
  onGestionarEdicion = (nuevo) =>{
    this.props.onGestionarEdicion(
      //el valor del elemento nombre del elemeto
      this.props.value.nombre,
      //el valor nuevo valor del elemento
      nuevo.target.value,
      //la posicion del elemento
      this.props.value.pos,
      //nombre del elemento que estoy editando
      nuevo.target.name,
        )
  }

  onGestionarDisponibilidad (disponibilidad){
    this.props.onGestionarDisponibilidad (disponibilidad,   this.props.value.pos)
  }

  onBorrar = (key) =>{
    this.props.onBorrar(key)
  }

  gestionarEnter = (event) => {
  if(event.key === 'Enter'){

    this.setState({
      open: false,
    });
  }
}

  gestionarApertura = () =>{
    this.setState({open: !this.state.open,

  })
   }



  render()

    {

  var fondo = this.state.open ? '#eee' : '#fff'
      return(
        <div>
          {!this.state.open ?
            <ListItem className='editar_producto'  button onClick={this.gestionarApertura}>
              <ListItemText primary={ this.props.value.nombre}

                secondary={this.props.value.descripcion}>
              </ListItemText>

              <ListItemSecondaryAction >
                <div style={{marginRight: '10px', marginTop: '12px'}}>
                  {this.state.open ? null: '$'+ this.props.value.precio}
                </div>
              </ListItemSecondaryAction>

            </ListItem>
          :
          <Collapse component="li" in={this.state.open} transitionDuration="auto" unmountOnExit>
            <List disablePadding>
              <ListItem   style={{backgroundColor:fondo}}  >
                <div className="menu_editar_producto">


                  <div className="item_editar_nombre">
                    <TextField autoFocus fullWidth={true} onKeyPress={this.gestionarEnter}
                      value={this.props.value.nombre}
                      onChange={this.onGestionarEdicion}
                    name='nombre'/>
                  </div>

                  <div className="item_editar_precio">
                    <Input
                      name="precio"
                      onKeyPress={this.gestionarEnter}
                      value={this.props.value.precio}
                      onChange={this.onGestionarEdicion}
                      fullWidth={true}
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                  </div>

                  <div className="item_editar_descripcion">
                    <TextField
                      id='descripcion'
                      style={{color: '#888', fontSize: '14px' ,lineHeight: '20px'  }}
                      fullWidth={true}
                      onKeyPress={this.gestionarEnter}
                      value={this.props.value.descripcion}
                      onChange={this.onGestionarEdicion}
                      multiline={true}
                      name='descripcion'
                    />
                  </div>
                  <div className="item_editar_controles">
                    <div className="item_eliminar_producto">
                      <IconButton
                        onTouchTap={() => this.onBorrar(this.props.value.key)}>
                        <DeleteIcon/>
                      </IconButton>
                    </div>
                    <div className="item_editar_disponibilidad">
                      Disponible
                      <Switch
                        checked={this.props.value.disponibilidad}
                        name='disponibilidad'
                        onChange={()=> this.onGestionarDisponibilidad(this.props.value.disponibilidad)}
                      />
                    </div>
                    <div className="item_editar_ok">
                      <Button dense raised color="primary" onClick={this.gestionarApertura}>OK</Button>
                    </div>
                  </div>
                </div>
              </ListItem>
            </List>
            <Divider/>
          </Collapse>

          }


          <Divider/>
        </div>
            )
  }
}
