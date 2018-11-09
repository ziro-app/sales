import React from 'react'
import Form from './Form/index'
import ErrorBoundary from './ErrorBoundary/index'

const App = () =>
	<ErrorBoundary>
		<Form />
	</ErrorBoundary>

export default App