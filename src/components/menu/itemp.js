import React, { Component } from 'react';
import {  ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';



export default class Itemp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      editando: false,
    };
  }
  onGestionarEdicion = (inicial, nuevo) =>{
    this.props.onGestionarEdicion(this.props.value.name,
      inicial.target.value, this.props.value.pos)
  }

  render(
  gestionarApertura = () =>{
    this.setState({editando: !this.state.editando})
   }
  ) {
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
              value={this.props.value.name}
              onChange={this.onGestionarEdicion}
              name='nombre'/>
            </div>
            <div className="item_editar_descripcion">
              <TextField
              id='descripcion'
              style={{color: '#888', fontSize: '14px' ,lineHeight: '20px'  }}
              fullWidth={true}
              multiLine={true}
              rows={2}
              value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."}/>
            </div>
            <div className="item_editar_precio">
              <TextField
              id='precio'
              fullWidth={true}
              value={'$95'}/>
            </div>
          </div>

          :

          <span>
            {this.props.value.name}
            <div className="menu_producto" >
              <div className="item_descripcion">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                </div>
              <div className="item_precio" >
              $90
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
