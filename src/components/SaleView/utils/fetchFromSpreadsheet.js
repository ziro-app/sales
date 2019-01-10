const fetchFromSpreadsheet = async (get, cancelTokenSource) => {
	/*-- get values_sales --*/
	const { data: { values: values_sales } } = await get(
		`${process.env.SALES_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values_sales)
		await Promise.reject('Error at fetchFromSpreadsheet. values_sales is undefined')
	if (values_sales.length === 0)
		await Promise.reject('Error at fetchFromSpreadsheet. values_sales.length === 0')
	const sales = values_sales.map( value => [
		value[0],
		value[2],
		value[3],
		value[4],
		value[5],
		value[6],
		value[7],
		value[8]
	]).slice(1)
	/*-- get values_statuses --*/
	const { data: { values: values_statuses } } = await get(
		`${process.env.STATUSES_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values_statuses)
		await Promise.reject('Error at fetchFromSpreadsheet. values_statuses is undefined')
	if (values_statuses.length === 0)
		await Promise.reject('Error at fetchFromSpreadsheet. values_statuses.length === 0')
	/*-- get values --*/
	const statuses = values_statuses.map(value => value[0])
	return { sales, statuses }
}

export default fetchFromSpreadsheet