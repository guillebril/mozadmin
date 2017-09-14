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
		this.state = { open:false};
	}

	gestionarAperturaModalMesa = () =>
	{
		console.log("Apertura");
		this.setState({open:true});
	}

	gestionarCerrarModalMesa = () =>
	{
		console.log("Cerrado");
		this.setState({open:false});
	}

	render()
	{

		return (
			<Paper  zDepth={2}   style={{minWidth:"100px" ,cursor:"pointer", minHeight:"100px" , backgroundColor:"#ecf0f1", display:"inherit", alignItems:"center", margin:"15px"}}
			onTouchTap={this.gestionarAperturaModalMesa}
			>
				<p style={{width:"100%", textAlign:"center", fontSize:"36px"}}  >
				{this.props.mesa.numero}
				</p>

				<Dialog
		          title="Dialog With Actions"
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.gestionarCerrarModalMesa}
		        >
		          The actions in this window were passed in as an array of React objects.
		     </Dialog>
			</Paper>
		);
	}

}

export default CuadradoMesa;
