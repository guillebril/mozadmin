import React, {Component } from 'react';
import {  ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import Toggle from 'material-ui/Toggle';

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
  render()
  {
    const style = {
    margin: 12,

    div: {
       marginBottom: 16,
     },
    };
    return(
      <div style={{display:"flex"}}>
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
        <div className='vista_lista_productos'>
            <div className="item_nombre">
              Hamburguesa completa
            </div>

            <div className='vista_descrip_precio'>
              <div className="item_descripcion">
                Sin mayonesa
              </div>
              <div className="item_precio">
                $45
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

      </div>
    )
  }
}
export default Producto;


//<div style={style}>20:15</div>
//<div style={style}>  Producto 2</div>
