const filterSale = (id, sales, logistics, updateIsComplete) => {
	const filtered = sales.filter(sale => sale[0] === id).pop()
	console.log(logistics)
	console.log(sales)
	const isPickedUp = []
	const isDroppedOff = []
	const trackingNumber = []
	updateIsComplete(Boolean(filtered[7] && filtered[8] && filtered[9] && filtered[10] && filtered[11]))
	if (filtered && filtered.length)
		return {
			found: true,
			saleData: [
				{ value: filtered[1].substring(0,6), name: 'Início' },
				{ value: filtered[2], name: 'Assessor' },
				{ value: filtered[3], name: 'Lojista' },
				{ value: filtered[4], name: 'Categoria' },
				{ value: filtered[5], name: 'Tipo' },
				{ value: filtered[6].substring(0,6), name: 'Despacho' },
				{ value: filtered[7], name: 'Horário' },
				{ value: filtered[8], name: 'Transporte' },
				{ value: filtered[9], name: 'Endereço' },
				{ value: filtered[10], name: 'Fardo' },
				{ value: filtered[11], name: 'Nota' },
				{ value: filtered[12], name: 'Observações' },
				{ value: filtered[14], name: 'Retirada'},
				{ value: isPickedUp[1], name: 'Retirados'},
				{ value: isDroppedOff[1], name: 'Despachado'},
				{ value: trackingNumber[1], name: 'Rastreio'},
			],
			status: filtered[13]
		}
	return { found: false }
}

export default filterSale