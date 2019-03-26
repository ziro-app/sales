import { getOptions, getSales, getLogistics } from './getOptions'

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
	const sales = getSales(values)
	const logistics = getLogistics(values,36)
	return { statuses, sales, logistics }
}

export default fetchFromSpreadsheet