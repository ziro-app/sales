import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { pickup } from '../utils/filters'
import { container, title, header, representative, row, reseller, empty } from '../styles'

const FilterPickup = ({ sales }) => {
	const filteredData = pickup(sales)
	return (
		<div style={container}>
			<h1 style={title}>Retirados</h1>
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
					<span style={empty}>Não há mercadorias aguardando no escritório</span>
			}
		</div>
	)
}

FilterPickup.propTypes = {
	sales: PropTypes.array.isRequired
}

export default FilterPickup