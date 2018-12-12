import React, { Fragment } from 'react'
import stringToDate from './stringToDate'
import { container, title, header, representative, row, reseller, empty } from '../styles'

const open = (name, sales) => {
	const filteredStatus = sales.filter( sale => sale[5] === 'Aberto' )
	const filteredDate = filteredStatus.filter( sale => stringToDate(sale[4]) <= new Date() )
	const sorted = filteredDate.sort( (a,b) => stringToDate(a[4]) - stringToDate(b[4]) || (a[2] < b[2] ? -1 : 1) )
	const simplified = sorted.map( sale => {
		sale[4] = sale[4].substr(0,6)
		return sale
	})
	if (simplified && simplified.length)
		return (
			<div style={container}>	
				<h1 style={title}>{name}</h1>
				<div style={header}>
					<span>Fim</span>
					<span style={representative}>Assessor</span>
					<span>Lojista</span>
				</div>
				{simplified.map( sale => {
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
				<h1 style={title}>{name}</h1>
				<span style={empty}>Não há atendimentos abertos</span>
			</div>
		)
}

const scheduled = (name, sales) => {
	const filteredStatus = sales.filter( sale => sale[5] === 'Aberto' )
	const filteredDate = filteredStatus.filter( sale => stringToDate(sale[1]) > new Date() )
	const sorted = filteredDate.sort( (a,b) => stringToDate(a[1]) - stringToDate(b[1]) || (a[2] < b[2] ? -1 : 1) )
	const simplified = sorted.map( sale => {
		sale[1] = sale[1].substr(0,6)
		return sale
	})
	if (simplified && simplified.length)
		return (
			<div style={container}>	
				<h1 style={title}>{name}</h1>
				<div style={header}>
					<span>Início</span>
					<span style={representative}>Assessor</span>
					<span>Lojista</span>
				</div>
				{simplified.map( sale => {
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
				<h1 style={title}>{name}</h1>
				<span style={empty}>Não há atendimentos agendados</span>
			</div>
		)
}

const payment = sales => {
	const filteredStatus = sales.filter( sale => sale[5] === 'Aberto' )
	const filteredDate = filteredStatus.filter( sale => stringToDate(sale[4]) > new Date() )
	const sorted = filteredDate.sort( (a,b) => stringToDate(a[4]) - stringToDate(b[4]) || (a[2] < b[2] ? -1 : 1) )
	const simplified = sorted.map( sale => {
		sale[4] = sale[4].substr(0,6)
		return sale
	})
	return simplified.map( sale => ({
		id: sale[0],
		fim: sale[4],
		assessor: sale[2],
		lojista: sale[3]
	}))
}

export { open, scheduled, payment }