import React from 'react'
import filterAndSort from '../../utils/filterAndSort'
import { container, title, row, reseller } from './styles'

const Panel = ({ sales }) =>
	<ul style={container}>
		<li style={title}>
			<span>Fim</span>
			<span>Assessor</span>
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
export default Panel