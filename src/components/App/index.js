import React, { Component } from 'react'
import getWindowWidth from './methods/getWindowWidth'
import getScrollY from './methods/getScrollY'
import updateState from './methods/updateState'
import renderApp from './methods/renderApp'


export default class App extends Component {
	state = {
		windowWidth: 0,
		scrollY: 0,
		sales: [],
		statuses: []
	}
	getWindowWidth = getWindowWidth(this)
	getScrollY = getScrollY(this)
	updateState = updateState(this)
	renderApp = renderApp(this)
	componentDidMount = () => window.addEventListener('resize', this.getWindowWidth)
	componentWillUnmount = () => window.removeEventListener('resize', this.getWindowWidth)
	render = () => this.renderApp()
}