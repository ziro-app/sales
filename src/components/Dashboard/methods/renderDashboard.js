import React from 'react'

const renderDashboard = that => () =>
	<ul>
		{that.state.sales.map( sale =>
			<li style={{ fontSize: '1.6rem' }} key={sale[0]}>
				<span>
					{sale[4]}
				</span>
				<span>
					{sale[2]}
				</span>
				<span>
					{sale[3]}
				</span>
			</li>
		)}
	</ul>

export default renderDashboard