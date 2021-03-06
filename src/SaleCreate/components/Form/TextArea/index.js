import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { area, areaFilled } from './styles'

export default class TextArea extends Component {
	handleChange = ({ target: { value } }) => this.props.updateParent(value)
	render = () => {
		return (
			<textarea
				style={this.props.value !== '' ? areaFilled : area}
				placeholder={this.props.placeholder}
				rows='3'
				value={this.props.value}
				onChange={this.handleChange}
			/>
		)
	}
}

TextArea.propTypes = {
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	updateParent: PropTypes.func.isRequired
}