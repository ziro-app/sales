import React from 'react'
import PropTypes from 'prop-types'

const AddNewSvg = ({ size, color }) =>
	<svg width={size} height={size} viewBox={'0 0 24 24'} fill={'none'} stroke={color} strokeWidth={'2'} strokeLinecap={'round'} strokeLinejoin={'round'}>
		<line x1={'12'} y1={'5'} x2={'12'} y2={'19'}></line>
		<line x1={'5'} y1={'12'} x2={'19'} y2={'12'}></line>
	</svg>

AddNewSvg.defaultProps = {
	size: 24,
	color: 'currentColor'
}

AddNewSvg.propTypes = {
	size: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired
}

export default AddNewSvg