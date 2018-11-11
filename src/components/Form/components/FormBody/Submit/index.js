import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { container, message, submit } from './styles'

export default class Submit extends Component {
	render = () =>
		<div style={container}>
			<input type='submit' style={submit} value='Enviar' onClick={this.props.submitForm} />
			<label style={message}>
				{
					this.props.uiState === 'submitted'
					?
						<span>Formulário enviado com sucesso</span>
					:
						this.props.uiState === 'error_submitting'
						?
							<span>Erro ao enviar formulário</span>
						:
							null
				}
			</label>
		</div>
}

Submit.propTypes = {
	submitForm: PropTypes.func.isRequired,
	uiState: PropTypes.string.isRequired
}