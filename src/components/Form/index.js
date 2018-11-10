/* import libraries */
import React, { Component } from 'react'
import { CancelToken } from 'axios'
/* import methods */
import { initialUiState, changeUiState } from './methods/stateMachine'
import fetchInitialData from './methods/fetchInitialData'
import updateDropdown from './methods/updateDropdown'
import updateDayPicker from './methods/updateDayPicker'
import updateRadio from './methods/updateRadio'
import submitForm from './methods/submitForm'
import render from './methods/render'

export default class Form extends Component {
	state = {
		/* initial ui state */
		uiState: initialUiState,
		/* dropdown data */
		resellers: [],
		representatives: ['Mariana', 'Rubia'],
		/* user inputs */
		start_date: '',
		representative: '',
		reseller: '',
		transaction_type: '',
		end_date: '',
		/* error messages */
		error_start_date: '',
		error_representative: '',
		error_reseller: '',
		error_transaction_type: '',
		error_end_date: ''
	}
	/*-- methods --*/
	changeUiState = changeUiState(this)
	fetchInitialData = fetchInitialData(this)
	updateDropdown = updateDropdown(this)
	updateDayPicker = updateDayPicker(this)
	updateRadio = updateRadio(this)
	submitForm = submitForm(this)
	cancelTokenSource = CancelToken.source()
	/*-- lifecycle --*/
	componentDidMount = () => this.fetchInitialData()
	componentWillUnmount = () => this.cancelTokenSource.cancel()
	render = () => render(
		this.state,
		this.updateDropdown,
		this.updateDayPicker,
		this.updateRadio,
		this.submitForm
	)
}