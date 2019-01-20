import React, { Component } from 'react'
import getScrollY from './methods/getScrollY'
import updateState from './methods/updateState'
import renderApp from './methods/renderApp'


export default class App extends Component {
	state = {
		scrollY: 0,
		sales: [],
		statuses: []
	}
	getScrollY = getScrollY(this)
	updateState = updateState(this)
	renderApp = renderApp(this)
	componentDidMount = () => window.addEventListener('scroll', this.getScrollY)
	componentWillUnmount = () => window.removeEventListener('scroll',  this.getScrollY)
	render = () => this.renderApp()
}