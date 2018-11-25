const filterAndSort = sales => {
	const filtered = sales.filter( sale => sale[5] === 'Aberto' )
	const sorted = filtered.sort( (a,b) => new Date(a[4]) - new Date(b[4]) || (a[2] < b[2] ? -1 : 1) )
	const table = sorted.map( sale => ({
		fim: sale[4],
		assessor: sale[2],
		lojista: sale[3]
	}))
	console.log(table)
}

export default filterAndSort