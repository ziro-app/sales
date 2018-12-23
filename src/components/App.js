/* import libraries */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
/* import methods */
import updateSales from './updateSales'
/* import components */
import Dashboard from './Dashboard/index'
import Sale from './Sale/index'
import SaleView from './SaleView/index'
import NotFound from './NotFound/index'
import ErrorBoundary from './ErrorBoundary/index'

export default class App extends Component {
	state = {
		sales: []
	}
	updateSales = updateSales(this)
	render = () =>
		<ErrorBoundary>
			<Router>
				<Switch>
					<Route exact path='/' render={ props => <Dashboard {...props} updateParent={this.updateSales} /> } />
					<Route path='/cadastrar' component={Sale} />
					<Route exact path='/atendimentos/:id' component={SaleView} />
					<Route path='/atendimentos/:id/editar' component={Sale} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</ErrorBoundary>
}