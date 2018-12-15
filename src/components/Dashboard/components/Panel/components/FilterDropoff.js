import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { dropoff } from '../utils/filters'
import { container, title, header, representative, row, reseller, empty } from '../styles'

const FilterDropoff = ({ sales }) => {
	const filteredData = dropoff(sales)
	return (
		<div style={container}>
			<h1 style={title}>Despachados</h1>
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
					<span style={empty}>Todos os despachos tiveram recebimento confirmado</span>
			}
		</div>
	)
}

FilterDropoff.propTypes = {
	sales: PropTypes.array.isRequired
}

export default FilterDropoff