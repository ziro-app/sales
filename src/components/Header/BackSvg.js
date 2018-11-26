import React from 'react'
import PropTypes from 'prop-types'

const BackSvg = ({ style, size, color }) =>
	<svg style={style} width={size} height={size} viewBox={'0 0 24 24'} fill={'none'} stroke={color} strokeWidth={'2'} strokeLinecap={'round'} strokeLinejoin={'round'}>
		<line x1={'19'} y1={'12'} x2={'5'} y2={'12'}></line>
		<polyline points={'12 19 5 12 12 5'}></polyline>
	</svg>

BackSvg.defaultProps = {
	style: {},
	size: 24,
	color: 'currentColor'
}

BackSvg.propTypes = {
	style: PropTypes.object,
	size: PropTypes.number.isRequired,
	color: PropTypes.string
}

export default BackSvg