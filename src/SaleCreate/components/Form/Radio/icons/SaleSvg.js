import React from 'react'
import PropTypes from 'prop-types'

const SaleSvg = ({ size, color }) =>
	<svg width={size} height={size} viewBox={'0 0 24 24'} fill={'none'} stroke={color} strokeWidth={'2'} strokeLinecap={'round'} strokeLinejoin={'round'}>
		<circle cx={'9'} cy={'21'} r={'1'}></circle>
		<circle cx={'20'} cy={'21'} r={'1'}></circle>
		<path d={'M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'}></path>
	</svg>

SaleSvg.defaultProps = {
	size: 28,
	color: 'currentColor'
}

SaleSvg.propTypes = {
	size: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired
}

export default SaleSvg