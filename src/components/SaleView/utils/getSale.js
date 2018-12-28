const getSale = (id, sales) => {
	const filtered = sales.filter(sale => sale[0] === id).pop()
	if (filtered && filtered.length)
		return {
			inicio: filtered[1],
			assessor: filtered[2],
			lojista: filtered[3],
			categoria: filtered[4],
			tipo: filtered[5],
			fim: filtered[6],
			status: filtered[7]
		}
	else return {}
}

export default getSale