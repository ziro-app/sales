import React, { Fragment } from 'react'
import AddNew from '../AddNew/index'
import filterAndSort from './utils/filterAndSort'
import { container, title, header, representative, row, reseller } from './styles'

const statusList = [
	'Abertos',
	'Agendados',
	'Em Pagamento',
	'Retirados',
	'Despachados'
]

const Panel = ({ sales }) =>
	<Fragment>	
		{statusList.map( (status, index) =>
			<div style={container} key={index}>
				<h1 style={title}>{status}</h1>
				<div style={header}>
					<span>Fim</span>
					<span style={representative}>Assessor</span>
					<span>Lojista</span>
				</div>
				{filterAndSort(sales).map( ({ id, fim, assessor, lojista }) =>
					<div style={row} key={id}>
						<span>{fim}</span>
						<span>{assessor}</span>
						<span style={reseller}>{lojista}</span>
					</div>
				)}
			</div>
		)}
		<AddNew />
	</Fragment>

export default Panel