import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sale from './Sale/index'
import Dashboard from './Dashboard/index'
import NotFound from './NotFound/index'
import ErrorBoundary from './ErrorBoundary/index'

const App = () =>
	<ErrorBoundary>
		<Router>
			<Switch>
				<Route exact path='/' component={Dashboard} />
				<Route path='/cadastrar' component={Sale} />
				<Route path='/atendimentos/:id' render={({match: {params: {id}}}) => <div>{id}</div>} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</ErrorBoundary>

export default App