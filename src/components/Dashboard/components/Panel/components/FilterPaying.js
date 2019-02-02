import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { paying } from '../utils/filters'
import { container, title, header, representative, row, reseller, empty } from '../styles'

const FilterPaying = ({ sales }) => {
	const filteredData = paying(sales)
	return (
		<div style={container}>
			<h1 style={title}>Pagando</h1>
			{filteredData && filteredData.length
				?
					<Fragment>
						<div style={header}>
							<span>Fim</span>
							<span style={representative}>Assessor</span>
							<span>Lojista</span>
						</div>
						{filteredData.map( sale => {
							const [ id, , assessor, lojista, , , fim, ...rest ] = sale
							return (
								<Link to={`/atendimentos/${id}`} key={id}>
									<div style={row} key={id}>
										<span>{fim}</span>
										<span>{assessor}</span>
										<span style={reseller}>{lojista}</span>
									</div>
								</Link>
							)
						})}
					</Fragment>
				:
					<span style={empty}>Não há lojistas pagando</span>
			}
		</div>
	)
}

FilterPaying.propTypes = {
	sales: PropTypes.array.isRequired
}

export default FilterPaying