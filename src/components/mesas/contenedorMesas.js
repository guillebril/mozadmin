// Dependencias
import React, {Component } from 'react';
import base from '../../rebase';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CuadradoMesa from './cuadradoMesa';
import ContenidoModal from './contenidoModal';


class ContenedorMesas extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {mesas:[],
		open:false}
		this.agregarMesa = this.agregarMesa.bind(this);
	}
  handleOpen = () => {
    this.setState({open: true});
  };

  handleCloseCancelar = () => {
    this.setState({open: false});
  };
	handleCloseAceptar = () => {
    this.setState({open: false});
		this.agregarMesa();
  };

	//Uso re-base para sincronizar el estado del objeto mesas con la db
	componentDidMount()
	{
		base.syncState('restaurantes/oconnells/mesas',
		{
			context: this,
			state: 'mesas',
			queries: {orderByChild: 'pos'},
			keepKeys: true,
			asArray: true
		});
	}

		 agregarMesa =() => {
			 base.push('restaurantes/oconnells/mesas', {
				 data:{
					 numero:"2"
				 },
			 });

			 console.log("Mesa agregada");
		 }


	render()
	{
		const actions = [
	      <FlatButton
	        label="Cancelar"
	        primary={true}
	        onTouchTap={this.handleCloseCancelar}
	      />,
	      <FlatButton
	        label="Aceptar"
	        primary={true}
	        keyboardFocused={true}
	        onTouchTap={this.handleCloseAceptar}
	      />,
	    ];
		return (
			<div style={{width:"100%"}}>
				<div style={{marginBottom:"25px"}}>
					<RaisedButton label="Agregar Mesa" primary={true}
					onTouchTap={this.handleOpen} />
					<Dialog
          title="Nueva cuenta"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
				<ContenidoModal />
				</Dialog>
				</div>

				<div style={{display:"flex",  flexWrap:"wrap"}}>
					<CuadradoMesa />
					<CuadradoMesa />
					<CuadradoMesa />
					<CuadradoMesa />
					<CuadradoMesa />
				</div>
			</div>
		);
	}
}

export default ContenedorMesas;
