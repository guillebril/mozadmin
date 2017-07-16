import React, { Component } from 'react';
import {  ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

import Toggle from 'material-ui/Toggle';

export default class ItemProducto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: props.value,
      editando: false,
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
      open: !this.state.open,
    });
  }
}

  gestionarApertura = () =>{
    this.setState({open: !this.state.open})

   }

  render()

    {
      return(
        <div>
          <ListItem
            initiallyOpen={this.state.open}
            open={this.state.open}
            onNestedListToggle={this.gestionarApertura}
            secondaryTextLines={2}
            disabled={this.state.open}
            primaryTogglesNestedList={true}
            className='editar_producto'
            hoverColor={'rgba(0,0,0,0)'}
            primaryText={

            this.state.open ?

            <div className="menu_editar_producto">
              <div className="item_editar_nombre">
                <TextField
                hintText="Producto"
                autoFocus
                fullWidth={true}
                onKeyPress={this.gestionarEnter}
                value={this.props.value.nombre}
                onChange={this.onGestionarEdicion}
                name='nombre'/>
              </div>
              <div className="item_editar_descripcion">
                <TextField

                id='descripcion'
                style={{color: '#888', fontSize: '14px' ,lineHeight: '20px'  }}
                fullWidth={true}
                hintText="descripcion.."
                value={this.props.value.descripcion}
                onChange={this.onGestionarEdicion}
                multiLine={true}
                rows={1}
                name='descripcion'
                />
              </div>
              <div className="item_editar_precio"> $
                <TextField
                name="precio"
                value={this.props.value.precio}
                onChange={this.onGestionarEdicion}
                fullWidth={true}
                />
              </div>
              <div className="item_eliminar_producto">
                <IconButton
                    tooltip="Borrar"
                    onTouchTap={() => this.onBorrar(this.props.value.key)}
                    >
                  <ActionDelete/>
                  </IconButton>
              </div>
              <div>
                <Toggle
                   label="disponible"
                   defaultToggled={this.props.value.disponibilidad}
                   name='disponibilidad'
                   onToggle={()=> this.onGestionarDisponibilidad(this.props.value.disponibilidad)}
                 />
              </div>
            </div>

            :
            <div className='vista_lista_productos'>
                <div className="item_nombre">
                  {this.props.value.nombre}
                </div>

                <div className='vista_descrip_precio'>
                  <div className="item_descripcion">
                    {this.props.value.descripcion}
                  </div>
                  <div className="item_precio">
                    ${this.props.value.precio}
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
            <Divider/>
      </div>
    )
  }
}
