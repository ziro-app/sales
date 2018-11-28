import React from 'react'
import Proptypes from 'prop-types'
import { open, scheduled } from './utils/filters'
import { row, reseller } from './styles'

const Tables = ({ sales, status }) => {
	const tablesToRender = {
		Abertos:
			open(sales).map( ({ id, fim, assessor, lojista }) =>
				<div style={row} key={id}>
					<span>{fim}</span>
					<span>{assessor}</span>
					<span style={reseller}>{lojista}</span>
				</div>
			),
		Agendados:
			scheduled(sales).map( ({ id, inicio, assessor, lojista }) =>
				<div style={row} key={id}>
					<span>{inicio}</span>
					<span>{assessor}</span>
					<span style={reseller}>{lojista}</span>
				</div>
			),
		'Em Pagamento':
			<div>Placeholder</div>,
		Retirados:
			<div>Placeholder</div>,
		Despachados:
			<div>Placeholder</div>
	}
	return tablesToRender[status]
}

Tables.propTypes = {
	sales: Proptypes.array.isRequired,
	status: Proptypes.string.isRequired
}

export default Tables