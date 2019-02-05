import React from 'react'
import ErrorMessage from '../ErrorMessage/index'

const FormInput = ({ errorMessage, render }) => {
	return (
		<ErrorMessage message={errorMessage}>
			{render()}
		</ErrorMessage>
	)
}

export default FormInput