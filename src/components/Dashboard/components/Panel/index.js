import React from 'react'
import { container, title, row, reseller } from './styles'

const Panel = ({ sales }) =>
	<ul style={container}>
		<li style={title}>
			<span>Fim</span>
			<span>Assessor</span>
			<span>Lojista</span>
		</li>
		{sales.map( sale =>
			<li style={row} key={sale[0]}>
				<span>{sale[4].substr(0,6)}</span>
				<span>{sale[2]}</span>
				<span style={reseller}>{sale[3]}</span>
			</li>
		)}
	</ul>

export default Panel