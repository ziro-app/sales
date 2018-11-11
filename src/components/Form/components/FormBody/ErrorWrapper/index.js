import React from 'react'
import PropTypes from 'prop-types'
import AlertSvg from './AlertSvg'
import { container, error } from './styles'

const ErrorWrapper = ({ errorMessage, children }) =>
	<div style={container}>
		<label style={error}>
			{errorMessage ? <AlertSvg width={16} height={16} /> : null} &nbsp; {errorMessage}
		</label>  
		{children}
	</div>

ErrorWrapper.propTypes = {
	errorMessage: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}

export default ErrorWrapper