import React from 'react'

const Panel = ({ sales }) =>
	<ul style={{ maxWidth: '400px', margin: '0 auto' }}>
		{sales.map( sale =>
			<li style={{ 
				fontSize: '1.4rem',
				display: 'grid',
				gridTemplateColumns: '17% 18% 45%',
				whiteSpace: 'nowrap'
			}} key={sale[0]}>
				<span>
					{sale[4].substr(0,6)}
				</span>
				<span>
					{sale[2]}
				</span>
				<span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
					{sale[3]}
				</span>
			</li>
		)}
	</ul>

export default Panel