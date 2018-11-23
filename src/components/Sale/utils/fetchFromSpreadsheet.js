const fetchFromSpreadsheet = async (get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.RESELLERS_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error fetching data. values is undefined. At fetchFromSpreadsheet')
	if (values.length === 0)
		await Promise.reject('Error fetching data. values.length === 0. At fetchFromSpreadsheet')
	const resellers = values.map( value => value[0] ).slice(1).sort()
	return { resellers }
}

export default fetchFromSpreadsheet