const getSale = (id, sales) => {
	const filtered = sales.filter(sale => sale[0] === id).pop()
	if (filtered && filtered.length)
		return {
			found: true,
			inicio: filtered[1].substring(0,6),
			assessor: filtered[2],
			lojista: filtered[3],
			categoria: filtered[4],
			tipo: filtered[5],
			despacho: filtered[6].substring(0,6),
			horario: filtered[7],
			transporte: filtered[8],
			endereco: filtered[9],
			fardo: filtered[10],
			nota: filtered[11],
			status: filtered[12]
		}
	return { found: false }
}

export default getSale