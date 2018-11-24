/* import libraries */
import React, { Component } from 'react'
import { CancelToken } from 'axios'
/* import methods */
import fetchInitialData from './methods/fetchInitialData'
import renderDashboard from './methods/renderDashboard'

export default class Dashboard extends Component {
	state = {
		sales: []
	}
	/*-- methods --*/
	cancelTokenSource = CancelToken.source()
	fetchInitialData = fetchInitialData(this)
	renderDashboard = renderDashboard(this)
	/*-- lifecycle --*/
	componentDidMount = () => this.fetchInitialData()
	componentWillUnmount = () => this.cancelTokenSource.cancel()
	render = () => this.renderDashboard()
}