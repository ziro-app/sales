export const

getOptions = (data, index) =>
	data.map(value => value[index]).slice(1).filter(value => Boolean(value)),

getSales = data =>
	data.map(value => value.slice(7,22)).slice(1).filter(value => {
		if (value.length)
			return Boolean(value[0])
		return false
	}),

getLogistics = (data, index) => data.map(value => [
	value[index],
	value[index + 1],
	value[index + 2],
	value[index + 3],
	value[index + 4],
	value[index + 5],
	value[index + 6],
	value[index + 7]
]).slice(1).filter(value => Boolean(value[0]))