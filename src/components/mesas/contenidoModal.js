// Dependencias
import React, {Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import ListaProductos from './listaProductos';

class contenidoModal extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
          value: '',
        };
  }
  handleChange = (event) => {
        this.setState({
          value: event.target.value,
        });
      };

   handleClick = (str) => {
      this.setState({
        value:str,
      });
      console.log(str)
    };
  GenerarCodigo = () =>{
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
    {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this.setState({value:text});

    console.log(text);
  }
  render()
	{
    const style = {
    margin: 12,

    toggle: {
       marginBottom: 16,
     },
    };
    return(
      <div>
        <TextField
          name="txtCodigo"
          value={this.state.value}
          hintText=""
          floatingLabelText="Codigo Mesa"
          multiLine={false}
          onChange={this.handleChange}
        />
        <RaisedButton label="Generar Codigo" primary={true}style={style} onTouchTap={this.GenerarCodigo} />
        <div>
        Esperando mozo
        </div>
        <br/>
        <TextField
         hintText=""
         floatingLabelText="Número mesa"
         multiLine={false}
        />
        <br/>
        <Toggle
          label="Estado"
          defaultToggled={true}
          style={style.toggle}
        />
        <br/>
        <ListaProductos/>

      </div>
    )
  }
}

export default contenidoModal;
