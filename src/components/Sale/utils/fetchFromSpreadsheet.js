const fetchFromSpreadsheet = async (get, cancelTokenSource) => {
	/*-- get values_resellers --*/
	const { data: { values: values_resellers } } = await get(
		`${process.env.RESELLERS_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values_resellers)
		await Promise.reject('Error at fetchFromSpreadsheet. values_resellers is undefined')
	if (values_resellers.length === 0)
		await Promise.reject('Error at fetchFromSpreadsheet. values_resellers.length === 0')
	const resellers = values_resellers.map( value => value[0] ).slice(1).sort()
	/*-- get values_representatives --*/
	const { data: { values: values_representatives } } = await get(
		`${process.env.REPRESENTATIVES_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values_representatives)
		await Promise.reject('Error at fetchFromSpreadsheet. values_representatives is undefined')
	if (values_representatives.length === 0)
		await Promise.reject('Error at fetchFromSpreadsheet. values_representatives.length === 0')
	const representatives = values_representatives.map( value => value[0] ).slice(1).sort()
	return { resellers, representatives }
}

export default fetchFromSpreadsheet