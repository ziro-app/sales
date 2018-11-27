import React, { Fragment } from 'react'
import Filters from './Filters'
import AddNew from '../AddNew/index'
import { container, title, header, representative } from './styles'

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
				<Filters sales={sales} status={status} />
			</div>
		)}
		<AddNew />
	</Fragment>

export default Panel