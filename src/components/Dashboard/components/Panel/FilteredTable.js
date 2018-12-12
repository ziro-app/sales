import React, { Fragment } from 'react'
import { open, scheduled, payment } from './utils/filters'
import { container, title, header, representative, row, reseller } from './styles'

const FilteredTable = ({ name, sales }) => {
	switch (name) {
		case 'Abertos': return (
			<div style={container}>	
				<h1 style={title}>{name}</h1>
				<div style={header}>
					<span>Fim</span>
					<span style={representative}>Assessor</span>
					<span>Lojista</span>
				</div>
				{open(sales).map( ({ id, fim, assessor, lojista }) =>
					<div style={row} key={id}>
						<span>{fim}</span>
						<span>{assessor}</span>
						<span style={reseller}>{lojista}</span>
					</div>
				)}
			</div>
		)
		case 'Agendados':  return scheduled(name, sales)
	}
}

export default FilteredTable