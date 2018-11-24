/* import libraries */
import React, { Component } from 'react'
import { CancelToken } from 'axios'
/* import methods */
import fetchInitialData from './methods/fetchInitialData'

export default class Dashboard extends Component {
	state = {
		sales: []
	}
	/*-- methods --*/
	cancelTokenSource = CancelToken.source()
	fetchInitialData = fetchInitialData(this)
	/*-- lifecycle --*/
	componentDidMount = () => this.fetchInitialData()
	componentWillUnmount = () => this.cancelTokenSource.cancel()
	render = () =>
		<p>Dashboard</p>
}