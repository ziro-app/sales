const fetchFromSpreadsheet = async (get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.SALES_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error at fetchFromSpreadsheet. values is undefined')
	if (values.length === 0)
		await Promise.reject('Error at fetchFromSpreadsheet. values.length === 0')
	const sales = values.map( value => [
		value[0],
		value[2],
		value[3],
		value[4],
		value[5],
		value[6],
		value[7],
		value[8]
	]).slice(1)
	return { sales }
}

export default fetchFromSpreadsheet