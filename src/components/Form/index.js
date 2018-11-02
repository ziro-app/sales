import React, { Component } from 'react'
import { get, CancelToken, isCancel } from 'axios'
import Dropdown from '@ziro/dropdown'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import ErrorBoundary from '../ErrorBoundary/index'
import updateParent from './methods/updateParent'
import { initialUiState, changeUiState } from './utils/stateMachine'
import fetchInitialData from './utils/fetchInitialData'
import { form, title } from './styles.js'

export default class Form extends Component {
	state = {
		uiState: initialUiState,
		/*-- form fields data --*/
		resellers: [],
		representatives: ['Ariene', 'Mariana', 'Rubia'],
		/*-- user inputs --*/
		reseller: '',
		representative: '',
		start_date: ''
	}
	/*-- methods --*/
	changeUiState = changeUiState(this)
	updateParent = updateParent(this)
	cancelTokenSource = CancelToken.source()
	handleDayChange = (day) => {
		this.setState({ start_date: day })
	}
	/*-- lifecycle --*/
	componentDidMount = async () => {
		try {
			this.changeUiState('FETCH')
			this.setState( await fetchInitialData(get, this.cancelTokenSource) )
			this.changeUiState('SUCCESS')
		} catch (error) {
			if (isCancel(error))
				console.log('Request canceled')
			else {
				this.changeUiState('ERROR')
				console.log(error)
			}
		}
	}
	componentWillUnmount = () => this.cancelTokenSource.cancel()
	render = () =>
		<ErrorBoundary>
			<div style={form}>
				<h1 style={title}>Cadastrar atendimento</h1>
				<Dropdown
					name='reseller'
					placeholder='Lojista'
					options={this.state.resellers}
					updateParent={this.updateParent}
				/>
				<Dropdown
					name='representative'
					placeholder='Assessor'
					options={this.state.representatives}
					updateParent={this.updateParent}
				/>
				<DayPickerInput onDayChange={this.handleDayChange} />
			</div>
		</ErrorBoundary>
}