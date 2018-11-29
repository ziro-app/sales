import React, { Fragment } from 'react'
import Proptypes from 'prop-types'
import { open, scheduled, payment } from './utils/filters'
import { header, representative, row, reseller } from './styles'

const Tables = ({ sales, status }) => {
	const tablesToRender = {
		Abertos:
			<Fragment>
				<div style={header}>
					<span>Fim</span>
					<span style={representative}>Assessor</span>
					<span>Lojista</span>
				</div>
			{open(sales).map( ({ id, fim, assessor, lojista }) =>
				<div style={row} key={id}>
					<span>{fim}</span>
					<span>{assessor}</span>
					<span style={reseller}>{lojista}</span>
				</div>
			)}
			</Fragment>,
		Agendados:
			<Fragment>
				<div style={header}>
					<span>Início</span>
					<span style={representative}>Assessor</span>
					<span>Lojista</span>
				</div>
			{scheduled(sales).map( ({ id, inicio, assessor, lojista }) =>
				<div style={row} key={id}>
					<span>{inicio}</span>
					<span>{assessor}</span>
					<span style={reseller}>{lojista}</span>
				</div>
			)}
			</Fragment>,
		'Em Pagamento':
			<Fragment>
				<div style={header}>
					<span>Fim</span>
					<span style={representative}>Assessor</span>
					<span>Lojista</span>
				</div>
			{payment(sales).map( ({ id, inicio, assessor, lojista }) =>
				<div style={row} key={id}>
					<span>{inicio}</span>
					<span>{assessor}</span>
					<span style={reseller}>{lojista}</span>
				</div>
			)}
			</Fragment>,
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