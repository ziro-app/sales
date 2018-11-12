import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RenderErrorMessage from './RenderErrorMessage'

export default class ErrorBoundary extends Component {
	state = { renderError: false }
	static getDerivedStateFromError = error => ({ renderError: true }) // for server-side rendering
	componentDidCatch = (error, info) => {
		console.log(error, info)
		this.setState({ renderError: true })
	}
	render = () => {
		if (this.state.renderError)
			return <RenderErrorMessage />
		return this.props.children
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.element.isRequired
}