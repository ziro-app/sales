import React from 'react'
import { pickup } from '../utils/filters'
import { container, title, header, representative, row, reseller, empty } from '../styles'

const FilterPickup = ({ sales }) => {
	const filteredData = pickup(sales)
	if (filteredData && filteredData.length)
		return (
			<div style={container}>	
				<h1 style={title}>Retirados</h1>
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
				<h1 style={title}>Retirados</h1>
				<span style={empty}>Não há mercadorias aguardando no escritório</span>
			</div>
		)
}

export default FilterPickup