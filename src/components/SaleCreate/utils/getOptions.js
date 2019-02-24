export const

getOptions = (data, index) =>
	data.map(value => value[index]).slice(1).sort().filter(value => Boolean(value[0])),

getOptionsNoSort = (data, index) =>
	data.map(value => value[index]).slice(1).filter(value => Boolean(value[0])),

getOptionsAddress = (data, index) => {
	const one = data.filter(value => value[index] === 'FAVORITOS').map(value => value[index + 1])
	const two = data.filter(value => value[index] !== 'FAVORITOS' && value[index]).map(value => ({
		[value[index]]: value[index + 1]
	})).slice(1)
	return [ ...two, { FAVORITOS: one } ]
},

getSales = data =>
	data.map(value => value.slice(7)).slice(1).filter(value => Boolean(value.length))