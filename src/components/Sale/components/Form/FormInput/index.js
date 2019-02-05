import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from '../ErrorMessage/index'

const FormInput = ({ errorMessage, render }) => {
	return (
		<ErrorMessage message={errorMessage}>
			{render()}
		</ErrorMessage>
	)
}

FormInput.propTypes = {
	uiState: PropTypes.string.isRequired,
	errorMessage: PropTypes.string.isRequired,
	render: PropTypes.func.isRequired
}

export default FormInput