import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { scheduled } from '../utils/filters'
import { container, title, header, representative, row, reseller, empty } from '../styles'

const FilterScheduled = ({ sales }) => {
	const filteredData = scheduled(sales)
	return (
		<div style={container}>
			<h1 style={title}>Agendados</h1>
			{filteredData && filteredData.length
				?
					<Fragment>
						<div style={header}>
							<span>Início</span>
							<span style={representative}>Assessor</span>
							<span>Lojista</span>
						</div>
						{filteredData.map( sale => {
							const [ id, inicio, assessor, lojista, ...rest ] = sale
							return (
								<Link to={`/atendimentos/${id}`} key={id}>
									<div style={row} key={id}>
										<span>{inicio}</span>
										<span>{assessor}</span>
										<span style={reseller}>{lojista}</span>
									</div>
								</Link>
							)
						})}
					</Fragment>
				:
					<span style={empty}>Não há atendimentos agendados</span>
			}
		</div>
	)
}

FilterScheduled.propTypes = {
	sales: PropTypes.array.isRequired
}

export default FilterScheduled