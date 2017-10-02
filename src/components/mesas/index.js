// Dependencias
import React, {Component } from 'react';

import ContenedorMesas from './contenedorMesas';
import ListaPedidosAClasificar from './listaPedidosAClasificar';

class Mesas extends Component
{
	constructor(props)
	{
		super(props);
	}

	render() {
		return (
			<div style={{display:"flex",alignItems:"baseline"}}>
				<div style={{display:"flex",flexDirection: "column", alignItems:"baseline"}}>
									<ListaPedidosAClasificar />
				</div>
				<ContenedorMesas />
			</div>
				);
	}
}

export default Mesas;
