import React, { Component } from 'react'
import Field from '@ziro/form-field'
import { get, CancelToken, isCancel } from 'axios'
import { initialUiState, changeUiState } from './utils/stateMachine'
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
			const { data: { values } } = await get(
				`${process.env.RESELLERS_SHEET_URL}`,
				{ cancelToken: this.cancelTokenSource.token }
			)
			const resellers = values.map( value => value[0] ).slice(1).sort()
			this.setState({ resellers })
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