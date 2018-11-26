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
import renderForm from './methods/renderForm'

export default class Sale extends Component {
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
		category: '',
		type: '',
		end_date: '',
		/* error messages */
		error_start_date: '',
		error_representative: '',
		error_reseller: '',
		error_category: '',
		error_type: '',
		error_end_date: ''
	}
	/*-- methods --*/
	cancelTokenSource = CancelToken.source()
	changeUiState = changeUiState(this)
	fetchInitialData = fetchInitialData(this)
	updateDropdown = updateDropdown(this)
	updateDayPicker = updateDayPicker(this)
	updateRadio = updateRadio(this)
	submitForm = submitForm(this)
	renderForm = renderForm(this)
	/*-- lifecycle --*/
	componentDidMount = () => this.fetchInitialData()
	componentWillUnmount = () => this.cancelTokenSource.cancel()
	render = () => this.renderForm(this.state.uiState)
}