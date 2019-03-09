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
	const logistics = getLogistics(values,34)
	const pickedup = logistics.map(value => [ value[0], value[1] ])
	const droppedoff = logistics.map(value => [ value[0], value[2] ])
	const tracking = logistics.map(value => [ value[0], value[3] ])
	return { statuses, sales, pickedup, droppedoff, tracking }
}

export default fetchFromSpreadsheet