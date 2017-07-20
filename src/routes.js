// Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Componentes
import App from './components/App';
import Menu from './components/menu/categorias';
import Mesas from './components/mesas';
import Page404 from './components/page404';

//todo lo que genere Route lo devuelve en el children del componente App (children es lo que contiene el componente)
// HABRIA QUE CAMBIAR ./components/menu/categorias (ese archivo) por algun index o algo mas general y reacomodar eso
const AppRoutes = () =>
	<App>
		<Switch>			
			<Route exact path="/mesas" component={Mesas} />
			<Route exact path="/" component={Menu} />
			<Route component={Page404} />
		</Switch>
	</App>

export default AppRoutes;