import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Form from './Form/index'
import NotFound from './NotFound/index'
import ErrorBoundary from './ErrorBoundary/index'

const App = () =>
	<ErrorBoundary>
		<Router>
			<Switch>
				<Route exact path='/' component={Form} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</ErrorBoundary>

export default App