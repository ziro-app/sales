import React, { Fragment } from 'react'
import Tables from './Tables'
import AddNew from '../AddNew/index'
import statusList from './utils/statusList'
import { container, title, header, representative } from './styles'

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
				<Tables sales={sales} status={status} />
			</div>
		)}
		<AddNew />
	</Fragment>

export default Panel