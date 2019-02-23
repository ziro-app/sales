import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ErrorBoundary from '../../ErrorBoundary/index'
import renderDashboard from '../renderRoutes/renderDashboard'
import renderSaleView from '../renderRoutes/renderSaleView'
import renderSale from '../renderRoutes/renderSale'
import Sale from '../../Sale/index'
import NotFound from '../../NotFound/index'

const renderApp = that => () =>
	<ErrorBoundary>
		<Router>
			<Switch>
				<Route exact path='/'render={props => renderDashboard(props, that.state, that.getScrollY, that.updateState)} />
				<Route exact path='/atendimentos/:id' render={props => renderSaleView(props, that.state, that.forceReloadAfterEdit)} />
				<Route path='/atendimentos/:id/editar' render={props => renderSale(props, that.forceReloadAfterEdit)} />
				<Route path='/cadastrar' component={Sale} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</ErrorBoundary>

export default renderApp