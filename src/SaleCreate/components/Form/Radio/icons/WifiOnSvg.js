import React from 'react'
import PropTypes from 'prop-types'

const WifiOnSvg = ({ size, color }) =>
	<svg width={size} height={size} viewBox={'0 0 24 24'} fill={'none'} stroke={color} strokeWidth={'2'} strokeLinecap={'round'} strokeLinejoin={'round'}>
		<path d={'M5 12.55a11 11 0 0 1 14.08 0'}></path>
		<path d={'M1.42 9a16 16 0 0 1 21.16 0'}></path>
		<path d={'M8.53 16.11a6 6 0 0 1 6.95 0'}></path>
		<line x1={'12'} y1={'20'} x2={'12'} y2={'20'}></line>
	</svg>

WifiOnSvg.defaultProps = {
	size: 28,
	color: 'currentColor'
}

WifiOnSvg.propTypes = {
	size: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired
}

export default WifiOnSvg