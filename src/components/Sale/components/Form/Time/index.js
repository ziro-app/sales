import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { input, inputFilled } from './styles'

export default class Time extends Component {
	handleChange = ({ target: { value } }) => this.props.updateParent(value)
	render = () => {
		return (
			<input
				style={this.props.value !== '' ? inputFilled : input}
				type='text'
				placeholder='Horário'
				value={this.props.value}
				onChange={this.handleChange}
			/>
		)
	}
}

Time.propTypes = {
	value: PropTypes.string.isRequired,
	updateParent: PropTypes.func.isRequired
}