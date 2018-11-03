import React, { Component } from 'react'
import { input } from '../styles'

export default class InputForDayPicker extends Component {
	render = () =>
		<input onKeyPress={event => event.preventDefault()} style={input} {...this.props} />
}