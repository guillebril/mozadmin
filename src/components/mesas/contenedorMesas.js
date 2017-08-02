// Dependencias
import React, {Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CuadradoMesa from './cuadradoMesa';


class ContenedorMesas extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {mesas:[]}
	}

	render()
	{
		return (
			<div style={{width:"100%"}}>
				<div style={{marginBottom:"25px"}}>
					<RaisedButton label="Agregar Mesa" primary={true} />
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