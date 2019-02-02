const getSale = (id, sales) => {
	const filtered = sales.filter(sale => sale[0] === id).pop()
	if (filtered && filtered.length)
		return {
			found: true,
			inicio: filtered[1].substr(0,6),
			assessor: filtered[2],
			lojista: filtered[3],
			categoria: filtered[4],
			tipo: filtered[5],
			despacho: filtered[6].substr(0,6),
			status: filtered[12]
		}
	else return { found: false }
}

export default getSale