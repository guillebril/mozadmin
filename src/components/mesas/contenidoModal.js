// Dependencias
import React, {Component } from 'react';
import base from '../../rebase';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import ListaProductos from './listaProductos';
import Time from 'react-time';
import update from 'immutability-helper';

class contenidoModal extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
          value: '',
          datosMesa:'',
          total:'',
        };
  }
  //Uso re-base para sincronizar el estado del objeto mesas con la db
	componentDidMount()
	{
		base.syncState('restaurantes/oconnells/mesas/'+this.props.valorKeyMesa,
		{
			context: this,
			state: 'datosMesa',
			asArray: false
		});
	}
  handleChangeCodigoMesa = (event) => {
        this.setState({
          datosMesa : {codigoMesa: event.target.value},
        });
      };
  handleChangeNumero = (event) => {
        this.setState({
          datosMesa : {numero: event.target.value},
        });
      };


  GenerarCodigo = () =>{
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
    {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      this.setState({
          datosMesa : {codigoMesa: text},
       });
  }
  render()
	{
    let now = new Date();
    var TotalText="Total: $"+ this.state.datosMesa.total;
    const style = {
    margin: 12,

    toggle: {
       marginBottom: 16,
       maxWidth:120,
     },
    };


    return(
      <div>

        <div>
        Esperando mozo
        </div>
        <TextField
          name="txtCodigo"
          value={this.state.datosMesa.codigoMesa}
          hintText=""
          floatingLabelText="Codigo Mesa"
          multiLine={false}
          onChange={this.handleChangeCodigoMesa}
        />
        <RaisedButton label="Generar Codigo" primary={true}style={style} onTouchTap={this.GenerarCodigo} />

        <br/>
        <TextField
        name="txtNumero"
         value={this.state.datosMesa.numero}
         hintText=""
         floatingLabelText="Número mesa"
         multiLine={false}
         onChange={this.handleChangeNumero}
        />
        <br/>
          <Toggle
          label="Estado"
          defaultToggled={true}
          style={style.toggle}
        />
        {TotalText}
        <br/>
        <ListaProductos
            keyMesa={this.props.valorKeyMesa}
        />
        <div>
        <Time value={now} format="HH:MM" />
        </div>
      </div>
    )
  }
}

export default contenidoModal;
