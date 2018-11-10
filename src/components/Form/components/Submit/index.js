import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { submit } from './styles'

export default class Submit extends Component {
	render = () =>
		<input type='submit' style={submit} value='Enviar' onClick={this.props.submitForm} />
}

Submit.propTypes = {
	submitForm: PropTypes.func.isRequired
}