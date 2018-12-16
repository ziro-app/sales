import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BackSvg from './BackSvg'
import { arrow } from './styles'

const BackArrow = ({ path }) => {
	if (path !== '/')
		return (
	    	<Link style={arrow} to='/'>
	    		<BackSvg size={27} color={'rgb(48,62,77)'} />
    		</Link>
		)
	return null
}

BackArrow.propTypes = {
	path: PropTypes.string.isRequired
}

export default BackArrow