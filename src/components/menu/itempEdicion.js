import React, { Component } from 'react';
import {  ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';



export default class ItempEdicion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      editando: false
    };
  }



  render(
  ) {
    return(


          <div className="descripcion_producto" >
            <div className="descripcion_producto_texto">
                Change your Google+ profile photo Lorem ipsu sit emet
              </div>
            <div className="descripcion_producto_precio" >
            $90
            </div>
        </div>

        secondaryTextLines={2}
        disabled={true}
        primaryTogglesNestedList={true}
        className='editar_producto'
        nestedLevel={0}
        hoverColor={'rgba(0,0,0,0)'}
        nestedItems={[
          <ListItem
            key={1}
            style={{marginLeft: '0', paddingTop: '0'}}
            disabled={true}
            primaryText={
              <div className='descripcion_producto'>
                <div className="descripcion_producto_texto">
                  <TextField
                  fullWidth={true}
                  value={this.state.value}/>
                </div>
                <div className='descripcion_producto_editar_precio'>
                  <TextField fullWidth={true} value={'$35'}/>
                </div>
              </div>
            }/>,
          <ListItem
            style={{marginLeft: '0', paddingTop: '0'}}
            key={2}
            disabled={true}
            secondaryText={ <TextField
              multiLine={true}
              rows={2}
              value='Change your Google+ profile photo Lorem ipsu sit emet'/>}
          />,
      ]}>
        </ListItem>
          <Divider/>
      </div>

    )
  }
}
