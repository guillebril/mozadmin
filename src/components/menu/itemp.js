import React, { Component } from 'react';
import {  ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import ActionDelete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import Toggle from 'material-ui/Toggle';

export default class Itemp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      editando: false,
    };
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
    console.log(disponibilidad);
    this.props.onGestionarDisponibilidad (disponibilidad,   this.props.value.pos)
  }

  onBorrar = (key) =>{
    this.props.onBorrar(key)
  }

  render(
  gestionarApertura = () =>{
    this.setState({editando: !this.state.editando})
   })
    {
      return(
        <div>
          <ListItem
            initiallyOpen={this.state.editando}
            onNestedListToggle={gestionarApertura}
            secondaryTextLines={2}
            disabled={true}
            primaryTogglesNestedList={true}
            className='editar_producto'
            nestedLevel={0}
            hoverColor={'rgba(0,0,0,0)'}
            primaryText={

            this.state.editando ?

            <div className="menu_editar_producto">
              <div className="item_editar_nombre">
                <TextField
                fullWidth={true}
                value={this.props.value.nombre}
                onChange={this.onGestionarEdicion}
                name='nombre'/>
              </div>
              <div className="item_editar_descripcion">
                <TextField
                id='descripcion'
                style={{color: '#888', fontSize: '14px' ,lineHeight: '20px'  }}
                fullWidth={true}
                value={this.props.value.descripcion}
                onChange={this.onGestionarEdicion}
                multiLine={true}
                rows={2}
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
                   name='disponibilidad'
                   toggled={this.props.value.disponibilidad}
                   onToggle={()=> this.onGestionarDisponibilidad(this.props.value.disponibilidad)}
                 />
              </div>
            </div>

            :

            <span>
              {this.props.value.nombre}
              <div className="menu_producto" >
                <div className="item_descripcion">
                  {this.props.value.descripcion}
                </div>
                <div className="item_precio">
                  ${this.props.value.precio}
                </div>
              </div>
            </span>
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
