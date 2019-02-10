import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { area, areaFilled } from './styles'

export default class TextArea extends Component {
	handleChange = ({ target: { value } }) => this.props.updateParent(value)
	render = () => {
		return (
			<textarea
				style={this.props.value !== '' ? areaFilled : area}
				placeholder='Observações'
				value={this.props.value}
				onChange={this.handleChange}
			/>
		)
	}
}

TextArea.propTypes = {
	value: PropTypes.string.isRequired,
	updateParent: PropTypes.func.isRequired
}