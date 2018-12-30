import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ErrorBoundary from '../../ErrorBoundary/index'
import Dashboard from '../../Dashboard/index'
import Sale from '../../Sale/index'
import SaleView from '../../SaleView/index'
import NotFound from '../../NotFound/index'

const renderApp = that => () =>
	<ErrorBoundary>
		<Router>
			<Switch>
				<Route exact path='/' render={props => <Dashboard {...props} updateParent={that.updateSales} />} />
				<Route path='/cadastrar' component={Sale} />
				<Route exact path='/atendimentos/:id' render={props => <SaleView {...props} sales={that.state.sales} />} />
				<Route path='/atendimentos/:id/editar' component={Sale} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</ErrorBoundary>

export default renderApp