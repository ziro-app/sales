import React, { Fragment } from 'react'
import Tables from './Tables'
import AddNew from '../AddNew/index'
import { open, scheduled, payment } from './utils/filters'
import { container, title, header, representative, row, reseller } from './styles'

const Panel = ({ sales }) =>
	<Fragment>	
		<div style={container}>
			<h1 style={title}>Abertos</h1>
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
		</div>
		<AddNew />
	</Fragment>

export default Panel