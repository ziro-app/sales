import React, { Fragment } from 'react'
import AddNew from '../AddNew/index'
import filterAndSort from './utils/filterAndSort'
import { container, status, header, representative, row, reseller } from './styles'

const Panel = ({ sales }) =>
	<Fragment>	
		<ul style={container}>
			<h1 style={status}>Abertos</h1>
			<li style={header}>
				<span>Fim</span>
				<span style={representative}>Assessor</span>
				<span>Lojista</span>
			</li>
			{filterAndSort(sales).map( ({ id, fim, assessor, lojista }) =>
				<li style={row} key={id}>
					<span>{fim}</span>
					<span>{assessor}</span>
					<span style={reseller}>{lojista}</span>
				</li>
			)}
		</ul>
		<AddNew />
	</Fragment>

export default Panel