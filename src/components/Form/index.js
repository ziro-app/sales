import React, { Component } from 'react'
import Field from '@ziro/form-field'
import { initialUiState, changeUiState } from './utils/stateMachine'
import fetchInitialData from './utils/fetchInitialData'
import { form, title } from './styles.js'

export default class Form extends Component {
	state = {
		uiState: initialUiState,
		resellers: []
	}
	changeUiState = changeUiState(this)
	componentDidMount = async () => {
		try {
			this.setState( await fetchInitialData() )
		} catch (error) {
			console.log(error)
		}
	}
	render = () =>
		<div style={form}>
			<h1 style={title}>Cadastrar atendimento</h1>
			<Field />
		</div>
}