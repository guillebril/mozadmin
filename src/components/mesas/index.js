// Dependencias
import React, {Component } from 'react';
import base from '../../rebase';

import ContenedorMesas from './contenedorMesas';

class Mesas extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {mesas:[]}
	}

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

	render() {
		return (
					<ContenedorMesas />
				);
	}
}

export default Mesas;
