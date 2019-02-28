/* import libraries */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CancelToken } from 'axios'
/* import methods */
import { initialUiState, changeUiState } from './methods/stateMachine'
import fetchInitialData from './methods/fetchInitialData'
import saveStatus from './methods/saveStatus'
import updateIsComplete from './methods/updateIsComplete'
import renderSaleView from './methods/renderSaleView'

export default class SaleView extends Component {
	state = {
		/* initial ui state */
		uiState: initialUiState,
		/* view data */
		sales: [],
		statuses: [],
		/* user inputs */
		status: '',
		/* error validation */
		errorIsComplete: '',
		saleIsComplete: false
	}
	/*-- methods --*/
	cancelTokenSource = CancelToken.source()
	changeUiState = changeUiState(this)
	fetchInitialData = fetchInitialData(this)
	saveStatus = saveStatus(this)
	updateIsComplete = updateIsComplete(this)
	renderSaleView = renderSaleView(this)
	/*-- lifecycle --*/
	componentDidMount = () => this.fetchInitialData()
	componentWillUnmount = () => this.cancelTokenSource.cancel()
	render = () => this.renderSaleView(this.state, this.saveStatus, this.updateIsComplete)
}

SaleView.propTypes = {
	match: PropTypes.object.isRequired,
	sales: PropTypes.array.isRequired,
	statuses: PropTypes.array.isRequired,
	forceReloadAfterEdit: PropTypes.func.isRequired
}