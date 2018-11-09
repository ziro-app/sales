import React, { Component } from 'react'
import { submit } from './styles'

export default class Submit extends Component {
	render = () =>
		<input type='submit' style={submit} value='Enviar' />
}