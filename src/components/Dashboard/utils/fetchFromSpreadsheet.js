import { getOptions } from './getOptions'

const fetchFromSpreadsheet = async (get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.DATA_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error at fetchFromSpreadsheet. values is undefined')
	if (values.length === 0)
		await Promise.reject('Error at fetchFromSpreadsheet. values.length === 0')
	const statuses = getOptions(values,6)
	console.log(statuses)
}

export default fetchFromSpreadsheet