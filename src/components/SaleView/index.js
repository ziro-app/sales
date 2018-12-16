import React from 'react'
import Header from '../Header/index'

const SaleView = ({ match: { params: { id } } }) =>
	<Header title={`Atendimento ${id}`}>
		<div>{id}</div>
	</Header>

export default SaleView