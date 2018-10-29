import React, { Component } from 'react'
import Field from '@ziro/form-field'
import { get, CancelToken, isCancel } from 'axios'
import { initialUiState, changeUiState } from './utils/stateMachine'
import fetchInitialData from './utils/fetchInitialData'
import { form, title } from './styles.js'

export default class Form extends Component {
	state = {
		uiState: initialUiState,
		resellers: []
	}
	
	changeUiState = changeUiState(this)
	cancelTokenSource = CancelToken.source()
	
	componentDidMount = async () => {
		try {
			this.setState( await fetchInitialData(get, this.cancelTokenSource) )
		} catch (error) {
			if (isCancel(error))
				console.log('Request canceled')
			else
				console.log(error)
		}
	}
	componentWillUnmount = () => {
		this.cancelTokenSource.cancel()
	}
	render = () =>
		<div style={form}>
			<h1 style={title}>Cadastrar atendimento</h1>
			<Field />
		</div>
}