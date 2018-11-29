import stringToDate from './stringToDate'

const open = sales => {
	const filteredStatus = sales.filter( sale => sale[5] === 'Aberto' )
	const filteredDate = filteredStatus.filter( sale => stringToDate(sale[4]) <= new Date() )
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

const scheduled = sales => {
	const filteredStatus = sales.filter( sale => sale[5] === 'Aberto' )
	const filteredDate = filteredStatus.filter( sale => stringToDate(sale[1]) > new Date() )
	const sorted = filteredDate.sort( (a,b) => stringToDate(a[1]) - stringToDate(b[1]) || (a[2] < b[2] ? -1 : 1) )
	const simplified = sorted.map( sale => {
		sale[1] = sale[1].substr(0,6)
		return sale
	})
	return simplified.map( sale => ({
		id: sale[0],
		inicio: sale[1],
		assessor: sale[2],
		lojista: sale[3]
	}))
}

const payment = sales => {
	console.log(sales)
	const filteredStatus = sales.filter( sale => sale[5] === 'Aberto' )
	const filteredDate = filteredStatus.filter( sale => stringToDate(sale[1]) > new Date() )
	const sorted = filteredDate.sort( (a,b) => stringToDate(a[1]) - stringToDate(b[1]) || (a[2] < b[2] ? -1 : 1) )
	const simplified = sorted.map( sale => {
		sale[1] = sale[1].substr(0,6)
		return sale
	})
	return simplified.map( sale => ({
		id: sale[0],
		inicio: sale[1],
		assessor: sale[2],
		lojista: sale[3]
	}))
}

export { open, scheduled, payment }