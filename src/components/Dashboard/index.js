import React, { Component } from 'react'
import fetchInitialData from './methods/fetchInitialData'

export default class Dashboard extends Component {
	state = {
		sales: []
	}
	fetchInitialData = fetchInitialData(this)
	componentDidMount = () => this.fetchInitialData()
	render = () =>
		<p>Dashboard</p>
}