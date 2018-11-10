import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WifiOnSvg from './WifiOnSvg'
import WifiOffSvg from './WifiOffSvg'
import { radioGroup, radioNotSelected, radioSelected, name, radio } from './styles'

export default class Radio extends Component {
	state = { value: '' }
	handleChange = ({ target: { value } }) => {
		this.setState({ value })
		this.props.updateParent(value)
	}
	render = () =>
		<div style={radioGroup} onChange={this.handleChange}>
			<label
				style={this.state.value === 'Online' ? radioSelected : radioNotSelected}
				htmlFor='on'
			>
				<WifiOnSvg width={27} height={27} />
				<p style={name}>Online</p>
			</label>
			<input style={radio} type='radio' name='onOrOff' id='on' value='Online' />
			<label
				style={this.state.value === 'Offline' ? radioSelected : radioNotSelected}
				htmlFor='off'
			>
				<WifiOffSvg width={27} height={27} />
				<p style={name}>Offline</p>
			</label>
			<input style={radio} type='radio' name='onOrOff' id='off' value='Offline' />
		</div>
}

Radio.propTypes = {
	updateParent: PropTypes.func.isRequired
}