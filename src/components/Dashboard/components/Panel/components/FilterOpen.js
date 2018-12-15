import React, { Fragment } from 'react'
import { open } from '../utils/filters'
import { container, title, header, representative, row, reseller, empty } from '../styles'

const FilterOpen = ({ sales }) => {
	const filteredData = open(sales)
	return (
		<div style={container}>	
			<h1 style={title}>Abertos</h1>
			{filteredData && filteredData.length
				?
					<Fragment>
						<div style={header}>
							<span>Fim</span>
							<span style={representative}>Assessor</span>
							<span>Lojista</span>
						</div>
						{filteredData.map( sale => {
							const [ id, inicio, assessor, lojista, fim, ...rest ] = sale
							return (
								<div style={row} key={id}>
									<span>{fim}</span>
									<span>{assessor}</span>
									<span style={reseller}>{lojista}</span>
								</div>
							)
						})}
					</Fragment>
				:
					<span style={empty}>Não há atendimentos abertos</span>
			}
		</div>
	)
}

export default FilterOpen