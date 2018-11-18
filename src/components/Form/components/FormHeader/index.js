import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'cloudinary-react'
import { form, title } from './styles'

const FormHeader = ({ children }) =>
	<div style={form}>
	    <Image
			cloudName='ziro'
			width='45'
			publicId='logo-round_kxn8sa'
			version='1508000699'
			format='png'
			secure='true'
	    />
		<h1 style={title}>Cadastrar atendimento</h1>
		{children}
	</div>

FormHeader.propTypes = {
	children: PropTypes.element.isRequired
}

export default FormHeader