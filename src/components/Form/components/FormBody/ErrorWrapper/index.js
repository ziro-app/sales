import React from 'react'
import PropTypes from 'prop-types'
import AlertSvg from './AlertSvg'
import { error } from './styles'

const ErrorWrapper = ({ errorMessage, children }) =>
	<div>
		<label style={error}>
			{errorMessage ? <AlertSvg size={16} /> : null} &nbsp; {errorMessage}
		</label>  
		{children}
	</div>

ErrorWrapper.propTypes = {
	errorMessage: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
}

export default ErrorWrapper