/* import libraries */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CancelToken } from 'axios'
/* import methods */
import { initialUiState, changeUiState } from './methods/stateMachine'
import fetchInitialData from './methods/fetchInitialData'
import renderDashboard from './methods/renderDashboard'
import scrollToYPosition from './utils/scrollToYPosition'
import updateDropdown from '../SaleCreate/methods/updateDropdown'

export default class Dashboard extends Component {
	state = {
		/* initial ui state */
		uiState: initialUiState,
		/* dashboard data */
		sales: [],
		statuses: [],
		filterAssessores:'',
		scrolled: false,
		/* error */
		error_filter: ''
	}
	/*-- methods --*/
	cancelTokenSource = CancelToken.source()
	changeUiState = changeUiState(this)
	fetchInitialData = fetchInitialData(this)
	renderDashboard = renderDashboard(this)
	scrollToYPosition = scrollToYPosition(this)
	updateDropdown = updateDropdown(this)
	/*-- lifecycle --*/
	componentDidMount = () => this.fetchInitialData()
	componentDidUpdate = () => this.scrollToYPosition()
	componentWillUnmount = () => {
		this.props.getScrollY()
		this.cancelTokenSource.cancel()
	}
	render = () => this.renderDashboard(this.state.uiState)
}

Dashboard.propTypes = {
	windowWidth: PropTypes.number,
	scrollY: PropTypes.number,
	getScrollY: PropTypes.func,
	updateParent: PropTypes.func.isRequired
}