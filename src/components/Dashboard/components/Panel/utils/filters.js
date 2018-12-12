import React, { Fragment } from 'react'
import stringToDate from './stringToDate'
import { container, title, header, representative, row, reseller, empty } from '../styles'

const open = sales => {
	const filteredStatus = sales.filter( sale => sale[5] === 'Aberto' )
	const filteredDate = filteredStatus.filter( sale => stringToDate(sale[4]) <= new Date() )
	const sorted = filteredDate.sort( (a,b) => stringToDate(a[4]) - stringToDate(b[4]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[4] = sale[4].substr(0,6)
		return sale
	})
}

const scheduled = sales => {
	const filteredStatus = sales.filter( sale => sale[5] === 'Aberto' )
	const filteredDate = filteredStatus.filter( sale => stringToDate(sale[1]) > new Date() )
	const sorted = filteredDate.sort( (a,b) => stringToDate(a[1]) - stringToDate(b[1]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[1] = sale[1].substr(0,6)
		return sale
	})
}

const payment = sales => {
	const filteredStatus = sales.filter( sale => sale[5] === 'Pagando' )
	const sorted = filteredStatus.sort( (a,b) => stringToDate(a[4]) - stringToDate(b[4]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[4] = sale[4].substr(0,6)
		return sale
	})
}

const pickup = sales => {
	const filteredStatus = sales.filter( sale => sale[5] === 'Retirado' )
	const sorted = filteredStatus.sort( (a,b) => stringToDate(a[4]) - stringToDate(b[4]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[4] = sale[4].substr(0,6)
		return sale
	})
}

const dropoff = sales => {
	const filteredStatus = sales.filter( sale => sale[5] === 'Despachado' )
	const sorted = filteredStatus.sort( (a,b) => stringToDate(a[4]) - stringToDate(b[4]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[4] = sale[4].substr(0,6)
		return sale
	})
}

export { open, scheduled, payment, pickup, dropoff }