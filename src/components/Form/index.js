/* import libraries */
import React, { Component } from 'react'
import { CancelToken } from 'axios'
/* import methods */
import { initialUiState, changeUiState } from './methods/stateMachine'
import fetchInitialData from './methods/fetchInitialData'
import updateDropdown from './methods/updateDropdown'
import updateDayPicker from './methods/updateDayPicker'
import render from './methods/render'

export default class Form extends Component {
	state = {
		/* initial ui state */
		uiState: initialUiState,
		/* dropdown data */
		resellers: [],
		representatives: ['Ariene', 'Mariana', 'Rubia'],
		/* user inputs */
		reseller: '',
		representative: '',
		start_date: '',
		end_date: ''
	}
	/*-- methods --*/
	changeUiState = changeUiState(this)
	fetchInitialData = fetchInitialData(this)
	updateDropdown = updateDropdown(this)
	updateDayPicker = updateDayPicker(this)
	cancelTokenSource = CancelToken.source()
	/*-- lifecycle --*/
	componentDidMount = () => this.fetchInitialData()
	componentWillUnmount = () => this.cancelTokenSource.cancel()
	render = () => render(
		this.state,
		this.updateDropdown,
		this.updateDayPicker
	)
}