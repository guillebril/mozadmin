import React, {Component } from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ContenidoModal from './contenidoModal';


class CuadradoMesa extends Component
{
	constructor(props)
	{
		super(props)
		this.state = {
			open:false,
		valorKeyMesaAbierta:''};

	}

	gestionarAperturaModalMesa = (keyMesa) =>
	{
		console.log("Apertura");
		console.log(this.props.mesa.key);
		this.setState({valorKeyMesaAbierta:this.props.mesa.key});
		this.setState({open:true});
	}

	gestionarCerrarModalMesa = () =>
	{
		console.log("Cerrado");
		this.setState({open:false});
	}

	render()
	{
		const actions = [
	      <FlatButton
	        label="Cerrar"
	        primary={true}
	        keyboardFocused={true}
	        onTouchTap={this.gestionarCerrarModalMesa}
	      />,
	    ];
		return (
			<Paper  zDepth={2}   style={{minWidth:"100px" ,cursor:"pointer", minHeight:"100px" , backgroundColor:"#ecf0f1", display:"inherit", alignItems:"center", margin:"15px"}}
			onTouchTap={this.gestionarAperturaModalMesa}
			>
				<p style={{width:"100%", textAlign:"center", fontSize:"36px"}}  >
				{this.props.mesa.numero}
				</p>

				<Dialog
							actions={actions}
		          title="Mesa"
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.gestionarCerrarModalMesa}
		        >
							<ContenidoModal valorKeyMesa={this.state.valorKeyMesaAbierta} />
		     </Dialog>
			</Paper>
		);
	}

}

export default CuadradoMesa;
