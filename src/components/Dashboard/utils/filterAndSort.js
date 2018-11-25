const filterAndSort = sales => {
	const filtered = sales.filter( sale => sale[5] === 'Aberto' )
	const sorted = filtered.sort( (a,b) => new Date(a[4]) - new Date(b[4]) || (a[2] < b[2] ? -1 : 1) )
	const simplified = sorted.map( sale => {
		sale[4] = sale[4].substr(0,6)
		return sale
	})
	const table = simplified.map( sale => ({
		id: sale[0],
		fim: sale[4],
		assessor: sale[2],
		lojista: sale[3]
	}))
	return table
}

export default filterAndSort