import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { delivering } from '../utils/filters'
import { container, title, header, representative, row, reseller, empty } from '../styles'

const FilterDelivering = ({ sales }) => {
	const filteredData = delivering(sales)
	return (
		<div style={container}>
			<h1 style={title}>EM TRÂNSITO</h1>
			{filteredData && filteredData.length
				?
					<Fragment>
						<div style={header}>
							<span>Despacho</span>
							<span style={representative}>Assessor</span>
							<span>Lojista</span>
						</div>
						{filteredData.map( sale => {
							const [ id, , assessor, lojista, , , despacho, ...rest ] = sale
							return (
								<Link to={`/atendimentos/${id}`} key={id}>
									<div style={row} key={id}>
										<span>{despacho}</span>
										<span>{assessor}</span>
										<span style={reseller}>{lojista}</span>
									</div>
								</Link>
							)
						})}
					</Fragment>
				:
					<span style={empty}>Não há mercadorias em trânsito</span>
			}
		</div>
	)
}

FilterDelivering.propTypes = {
	sales: PropTypes.array.isRequired
}

export default FilterDelivering