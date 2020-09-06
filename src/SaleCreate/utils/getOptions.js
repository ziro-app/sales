export const

getOptions = (data, index) =>
	data.map(value => value[index]).slice(1).sort().filter(value => Boolean(value[0])),

getOptionsNoSort = (data, index) =>
	data.map(value => value[index]).slice(1).filter(value => Boolean(value[0])),

getOptionsAddress = (data, index) => {
	console.log(data.filter(value => value[index] !== 'FAVORITOS' && value[index]).map(value => ({
		[value[index]]: [value[index + 1], value[index + 42]]
	})).slice(1))
	const one = data.filter(value => value[index] === 'FAVORITOS').map(value => value[index + 1])
	const two = data.filter(value => value[index] !== 'FAVORITOS' && value[index]).map(value => ({
		[value[index]]: [value[index + 1], value[index + 42]]
	})).slice(1)
	return [ ...two, { FAVORITOS: one } ]
},

getSales = data =>
	data.map(value => value.slice(7,22)).slice(1).filter(value => {
		if (value.length)
			return Boolean(value[0])
		return false
	})