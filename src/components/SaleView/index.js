import React from 'react'
import Header from '../Header/index'

const SaleView = ({ match: { path, params: { id } } }) =>
	<Header title={`Atendimento ${id}`} path={path}>
		<div>{id}</div>
	</Header>

export default SaleView