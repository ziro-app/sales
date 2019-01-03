const fetchFromSpreadsheet = async (get, cancelTokenSource) => {
	const { data: { values: values_resellers } } = await get(
		`${process.env.RESELLERS_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	const { data: { values: values_representatives } } = await get(
		`${process.env.REPRESENTATIVES_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values_resellers || !values_representatives)
		await Promise.reject('Error fetching data. values is undefined. At fetchFromSpreadsheet')
	if (values_resellers.length === 0 || values_representatives.length === 0)
		await Promise.reject('Error fetching data. values.length === 0. At fetchFromSpreadsheet')
	const resellers = values_resellers.map( value => value[0] ).slice(1).sort()
	const representatives = values_representatives.map( value => value[0] ).slice(1).sort()
	return { resellers, representatives }
}

export default fetchFromSpreadsheet