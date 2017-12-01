// Dependencias
import React, {Component } from 'react';
import ContenedorMesas from './contenedorMesas';
import ListaPedidosAClasificar from './listaPedidosAClasificar';

class Mesas extends Component
{

	render() {
		return (
			<div style={{display:"flex",alignItems:"baseline"}}>
				<div style={{display:"flex",flexDirection: "column", alignItems:"baseline",  borderRight: '1px solid #ddd', paddingRight:'10px', marginRight: '10px'}}>
					<ListaPedidosAClasificar />
				</div>
				<ContenedorMesas />
			</div>
				);
	}
}

export default Mesas;
