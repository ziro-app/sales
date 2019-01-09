const fetchFromSpreadsheet = async (get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.STATUSES_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error fetching data. values is undefined. At fetchFromSpreadsheet')
	if (values.length === 0)
		await Promise.reject('Error fetching data. values.length === 0. At fetchFromSpreadsheet')
	const statuses = values.map(value => value[0])
	return { statuses }
}

export default fetchFromSpreadsheet