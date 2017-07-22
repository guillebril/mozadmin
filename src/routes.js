// Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Componentes
import App from './components/App';
import Mesas from './components/mesas';
import Page404 from './components/page404';


const AppRoutes = () =>
	<div>
		<Switch>
			<Route path="/app" component={App} />
			<Route path="/mesas" component={Mesas} />
			<Route component={Page404} />
		</Switch>
	</div>

export default AppRoutes;