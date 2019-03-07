import stringToDate from './stringToDate'

const scheduled = sales => {
	const filteredStatus = sales.filter( sale => sale[13] === 'Escolhendo' )
	const filteredDate = filteredStatus.filter( sale => stringToDate(sale[1]) > new Date() )
	const sorted = filteredDate.sort( (a,b) => stringToDate(a[1]) - stringToDate(b[1]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[1] = sale[1].substr(0,6)
		return sale
	})
}

const choosing = sales => {
	const filteredStatus = sales.filter( sale => sale[13] === 'Escolhendo' )
	const filteredDate = filteredStatus.filter( sale => stringToDate(sale[1]) <= new Date() )
	const sorted = filteredDate.sort( (a,b) => stringToDate(a[6]) - stringToDate(b[6]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[6] = sale[6].substr(0,6)
		return sale
	})
}

const paying = sales => {
	const filteredStatus = sales.filter( sale => sale[13] === 'Pagando' )
	const sorted = filteredStatus.sort( (a,b) => stringToDate(a[6]) - stringToDate(b[6]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[6] = sale[6].substr(0,6)
		return sale
	})
}

const pickingUp = sales => {
	const filteredStatus = sales.filter( sale => sale[13] === 'Retirando' )
	const sorted = filteredStatus.sort( (a,b) => stringToDate(a[6]) - stringToDate(b[6]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[6] = sale[6].substr(0,6)
		return sale
	})
}

const droppingOff = sales => {
	const filteredStatus = sales.filter( sale => sale[13] === 'Despachando' )
	const sorted = filteredStatus.sort( (a,b) => stringToDate(a[6]) - stringToDate(b[6]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[6] = sale[6].substr(0,6)
		return sale
	})
}

const delivering = sales => {
	const filteredStatus = sales.filter( sale => sale[13] === 'Em trânsito' )
	const sorted = filteredStatus.sort( (a,b) => stringToDate(a[6]) - stringToDate(b[6]) || (a[2] < b[2] ? -1 : 1) )
	return sorted.map( sale => {
		sale[6] = sale[6].substr(0,6)
		return sale
	})
}

export { scheduled, choosing, paying, pickingUp, droppingOff, delivering }