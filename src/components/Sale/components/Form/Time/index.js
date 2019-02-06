import React, { Component } from 'react'
import { time } from './styles'

export default class Time extends Component {
	handleChange = ({ target: { value } }) => this.props.updateParent(value)
	render = () => {
		return (
			<input
				style={time}
				type='time'
				placeholder='00:00'
				value={this.props.time}
				onChange={this.handleChange}
			/>
		)
	}
}

