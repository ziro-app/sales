export const

getOptions = (data, index) =>
	data.map(value => value[index]).slice(1).filter(value => Boolean(value)),

getSales = data =>
	data.map(value => value.slice(7)).slice(1).filter(value => Boolean(value.length))