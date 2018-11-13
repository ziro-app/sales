import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WifiOnSvg from './WifiOnSvg'
import WifiOffSvg from './WifiOffSvg'
import { radioGroup, radioNotSelected, radioSelected, name, radio } from './styles'

export default class Radio extends Component {
	handleChange = ({ target: { value } }) => this.props.updateParent(value)
	render = () =>
		<div style={radioGroup}>
			<label
				style={this.props.value === 'Online' ? radioSelected : radioNotSelected}
				htmlFor='on'
			>
				<WifiOnSvg size={28} />
				<p style={name}>Online</p>
			</label>
			<input
				style={radio}
				type='radio'
				name='onOrOff'
				id='on'
				value='Online'
				onChange={this.handleChange}
				checked={this.props.value === 'Online'}
			/>
			<label
				style={this.props.value === 'Offline' ? radioSelected : radioNotSelected}
				htmlFor='off'
			>
				<WifiOffSvg size={28} />
				<p style={name}>Offline</p>
			</label>
			<input
				style={radio}
				type='radio'
				name='onOrOff'
				id='off'
				value='Offline'
				onChange={this.handleChange}
				checked={this.props.value === 'Offline'}
			/>
		</div>
}

Radio.propTypes = {
	value: PropTypes.string.isRequired,
	updateParent: PropTypes.func.isRequired
}