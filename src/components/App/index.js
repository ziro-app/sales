import React, { Component } from 'react'
import updateSales from './methods/updateSales'
import renderApp from './methods/renderApp'


export default class App extends Component {
	state = {
		sales: []
	}
	updateSales = updateSales(this)
	renderApp = renderApp(this)
	render = () => this.renderApp()
}