// Dependencias
import React, {Component } from 'react';

import ContenedorMesas from './contenedorMesas';

class Mesas extends Component
{
	constructor(props)
	{
		super(props);
	}

	render() {
		return (
					<ContenedorMesas
					 />
				);
	}
}

export default Mesas;
