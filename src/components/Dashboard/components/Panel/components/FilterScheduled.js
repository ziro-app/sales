import React from 'react'
import { scheduled } from '../utils/filters'
import { container, title, header, representative, row, reseller, empty } from '../styles'

const FilterScheduled = ({ sales }) => {
	const filteredData = scheduled(sales)
	if (filteredData && filteredData.length)
		return (
			<div style={container}>	
				<h1 style={title}>Agendados</h1>
				<div style={header}>
					<span>Início</span>
					<span style={representative}>Assessor</span>
					<span>Lojista</span>
				</div>
				{filteredData.map( sale => {
					const [ id, inicio, assessor, lojista, ...rest ] = sale
					return (
						<div style={row} key={id}>
							<span>{inicio}</span>
							<span>{assessor}</span>
							<span style={reseller}>{lojista}</span>
						</div>
				)})}
			</div>
		)
	else
		return (
			<div style={container}>	
				<h1 style={title}>Agendados</h1>
				<span style={empty}>Não há atendimentos agendados</span>
			</div>
		)
}

export default FilterScheduled