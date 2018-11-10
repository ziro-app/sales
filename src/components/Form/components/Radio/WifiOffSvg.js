import React from 'react'
import PropTypes from 'prop-types'

const WifiOffSvg = ({ width, height, color }) =>
	<svg width={width} height={height} viewBox={"0 0 24 24"} fill={"none"} stroke={color} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
		<line x1={"1"} y1={"1"} x2={"23"} y2={"23"}></line>
		<path d={"M16.72 11.06A10.94 10.94 0 0 1 19 12.55"}></path>
		<path d={"M5 12.55a10.94 10.94 0 0 1 5.17-2.39"}></path>
		<path d={"M10.71 5.05A16 16 0 0 1 22.58 9"}></path>
		<path d={"M1.42 9a15.91 15.91 0 0 1 4.7-2.88"}></path>
		<path d={"M8.53 16.11a6 6 0 0 1 6.95 0"}></path>
		<line x1={"12"} y1={"20"} x2={"12"} y2={"20"}></line>
	</svg>

WifiOffSvg.defaultProps = {
	width: 24,
	height: 24,
	color: 'currentColor'
}

WifiOffSvg.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	color: PropTypes.string
}

export default WifiOffSvg