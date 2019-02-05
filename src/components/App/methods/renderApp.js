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
				<Route exact path='/' render={props => <Dashboard {...props} windowWidth={that.state.windowWidth} getScrollY={that.getScrollY} scrollY={that.state.scrollY} updateParent={that.updateState} />} />
				<Route path='/cadastrar' component={Sale} />
				<Route exact path='/atendimentos/:id' render={props => <SaleView {...props} sales={that.state.sales} statuses={that.state.statuses} forceReloadAfterEdit={that.forceReloadAfterEdit} />} />
				<Route path='/atendimentos/:id/editar' render={props => <Sale {...props} forceReloadAfterEdit={that.forceReloadAfterEdit} />} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</ErrorBoundary>

export default renderApp