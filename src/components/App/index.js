import React, { Component } from 'react'
import updateState from './methods/updateState'
import renderApp from './methods/renderApp'


export default class App extends Component {
	state = {
		sales: [],
		statuses: []
	}
	updateState = updateState(this)
	renderApp = renderApp(this)
	render = () => this.renderApp()
}