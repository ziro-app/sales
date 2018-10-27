import React from 'react'
import Field from '@ziro/form-field'
import { form, title } from './styles.js'

const Form = () => (
	<div style={form}>
		<h1 style={title}>Cadastrar atendimento</h1>
		<Field />
	</div>
)

export default Form