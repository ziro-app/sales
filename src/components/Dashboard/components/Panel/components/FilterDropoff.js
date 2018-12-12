import React from 'react'
import { dropoff } from '../utils/filters'
import { container, title, header, representative, row, reseller, empty } from '../styles'

const FilterDropoff = ({ sales }) => {
	const filteredData = dropoff(sales)
	if (filteredData && filteredData.length)
		return (
			<div style={container}>	
				<h1 style={title}>Despachados</h1>
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
				)})}
			</div>
		)
	else
		return (
			<div style={container}>	
				<h1 style={title}>Despachados</h1>
				<span style={empty}>Não há atendimentos aguardando recebimento pelo lojista</span>
			</div>
		)
}

export default FilterDropoff