import stringToDate from './stringToDate'

const open = sales => {
	const filteredStatus = sales.filter( sale => sale[7] === 'Aberto' )
	const filteredDate = filteredStatus.filter( sale => stringToDate(sale[1]) <= new Date() )
	const sorted = filteredDate.sort( (a,b) => stringToDate(a[6]) - stringToDate(b[6]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[6] = sale[6].substr(0,6)
		return sale
	})
}

const scheduled = sales => {
	const filteredStatus = sales.filter( sale => sale[7] === 'Aberto' )
	const filteredDate = filteredStatus.filter( sale => stringToDate(sale[1]) > new Date() )
	const sorted = filteredDate.sort( (a,b) => stringToDate(a[1]) - stringToDate(b[1]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[1] = sale[1].substr(0,6)
		return sale
	})
}

const payment = sales => {
	const filteredStatus = sales.filter( sale => sale[7] === 'Pagando' )
	const sorted = filteredStatus.sort( (a,b) => stringToDate(a[6]) - stringToDate(b[6]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[6] = sale[6].substr(0,6)
		return sale
	})
}

const pickup = sales => {
	const filteredStatus = sales.filter( sale => sale[7] === 'Retirado' )
	const sorted = filteredStatus.sort( (a,b) => stringToDate(a[6]) - stringToDate(b[6]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[6] = sale[6].substr(0,6)
		return sale
	})
}

const dropoff = sales => {
	const filteredStatus = sales.filter( sale => sale[7] === 'Despachado' )
	const sorted = filteredStatus.sort( (a,b) => stringToDate(a[6]) - stringToDate(b[6]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[6] = sale[6].substr(0,6)
		return sale
	})
}

export { open, scheduled, payment, pickup, dropoff }