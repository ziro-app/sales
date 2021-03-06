/* import libraries */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CancelToken } from 'axios'
/* import methods */
import { initialUiState, changeUiState } from './methods/stateMachine'
import fetchInitialData from './methods/fetchInitialData'
import updateDropdown from './methods/updateDropdown'
import updateDayPicker from './methods/updateDayPicker'
import updateRadio from './methods/updateRadio'
import updateTime from './methods/updateTime'
import updateComments from './methods/updateComments'
import updateEventIsCreated from './methods/updateEventIsCreated'
import submitForm from './methods/submitForm'
import renderForm from './methods/renderForm'

export default class SaleCreate extends Component {
	state = {
		/* initial ui state */
		uiState: initialUiState,
		/* dropdown data */
		resellers: [],
		representatives: [],
		shipping_options: [],
		addresses: [],
		packaging_options: ['Livre', '23Kg', 'Sacolas'],
		invoice_options: [],
		/* user inputs */
		start_date: '',
		representative: '',
		reseller: '',
		category: '',
		type: '',
		end_date: '',
		time: '',
		shipping: '',
		address: '',
		packaging: '',
		invoice: '',
		comments: '',
		/* sale data */
		status: '',
		pickup_code: '',
		/* error messages */
		error_start_date: '',
		error_representative: '',
		error_reseller: '',
		error_category: '',
		error_type: '',
		error_end_date: '',
		error_time: '',
		error_shipping: '',
		error_address: '',
		error_packaging: '',
		error_invoice: '',
		error_comments: '',
		/* support variable */
		eventIsCreated: false
	}
	/*-- methods --*/
	cancelTokenSource = CancelToken.source()
	changeUiState = changeUiState(this)
	fetchInitialData = fetchInitialData(this)
	updateDropdown = updateDropdown(this)
	updateDayPicker = updateDayPicker(this)
	updateRadio = updateRadio(this)
	updateTime = updateTime(this)
	updateComments = updateComments(this)
	updateEventIsCreated = updateEventIsCreated(this)
	submitForm = submitForm(this)
	renderForm = renderForm(this)
	/*-- lifecycle --*/
	componentDidMount = () => this.fetchInitialData()
	componentWillUnmount = () => this.cancelTokenSource.cancel()
	render = () => this.renderForm(this.state.uiState)
}

SaleCreate.propTypes = {
	forceReloadAfterEdit: PropTypes.func
}