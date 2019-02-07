import React, { Component } from 'react'
import { time } from './styles'

export default class Time extends Component {
	handleChange = ({ target: { value } }) => this.props.updateParent(value)
	render = () => {
		return (
			<input
				style={time}
				type='text'
				placeholder='Horário'
				value={this.props.value}
				onChange={this.handleChange}
			/>
		)
	}
}

