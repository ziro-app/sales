import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
	state = { renderError: false }
	static getDerivedStateFromError = error => ({ renderError: true })
	componentDidCatch = (error, info) => console.log(error, info)
	render = () => {
		if (this.state.renderError)
			return <h1>Erro na renderização</h1>
		return this.props.children
	}
}