import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { choosing } from '../utils/filters'
import { container, title, header, representative, row, reseller, empty } from '../styles'

const FilterChoosing = ({ sales }) => {
	const filteredData = choosing(sales)
	return (
		<div style={container}>	
			<h1 style={title}>ESCOLHENDO</h1>
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
									<div style={row}>
										<span>{despacho}</span>
										<span>{assessor}</span>
										<span style={reseller}>{lojista}</span>
									</div>
								</Link>
							)
						})}
					</Fragment>
				:
					<span style={empty}>Não há lojistas escolhendo</span>
			}
		</div>
	)
}

FilterChoosing.propTypes = {
	sales: PropTypes.array.isRequired
}

export default FilterChoosing