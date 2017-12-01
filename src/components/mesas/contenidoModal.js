// Dependencias
import React, {Component } from 'react';
import base from '../../rebase';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Switch from 'material-ui/Switch';
import ListaProductos from './listaProductos';

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
          onChange={this.handleChangeCodigoMesa}
        />
        <Button style={style} raised onTouchTap={this.GenerarCodigo} > Generar Codigo
        </Button>

        <br/>
        <TextField
          name="txtNumero"
          value={this.state.datosMesa.numero}

          onChange={this.handleChangeNumero}
        />
        <br/>
        <Switch
          label="Estado"
          checked={true}
        />
        {TotalText}
        <br/>
        <ListaProductos
          keyMesa={this.props.valorKeyMesa}
        />

      </div>
    )
  }
}

export default contenidoModal;
