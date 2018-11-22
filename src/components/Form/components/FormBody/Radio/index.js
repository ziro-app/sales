import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { radioGroup, radioNotSelected, radioSelected, name, radio } from './styles'

export default class Radio extends Component {
	handleChange = ({ target: { value } }) => this.props.updateParent(value)
	render = () =>
		<div style={radioGroup}>
			{this.props.options.map( (option, index) =>
				<Fragment key={index}>
					<label
						style={this.props.value === option ? radioSelected : radioNotSelected}
						htmlFor={option}
					>
						{this.props.icons[index]}
						<p style={name}>{option}</p>
					</label>
					<input
						style={radio}
						type='radio'
						name='options'
						id={option}
						value={option}
						onChange={this.handleChange}
						checked={this.props.value === option}
					/>
				</Fragment>
			)}
		</div>
}

Radio.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	icons: PropTypes.arrayOf(PropTypes.element).isRequired,
	value: PropTypes.string.isRequired,
	updateParent: PropTypes.func.isRequired
}