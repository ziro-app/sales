const fetchFromSpreadsheet = async (get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.SALES_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error fetching data. values is undefined. At fetchFromSpreadsheet')
	if (values.length === 0)
		await Promise.reject('Error fetching data. values.length === 0. At fetchFromSpreadsheet')
	const sales = values.map( value => [
		value[0],
		value[2],
		value[3],
		value[4],
		value[7],
		value[8]
	]).slice(1)
	return { sales }
}

export default fetchFromSpreadsheet