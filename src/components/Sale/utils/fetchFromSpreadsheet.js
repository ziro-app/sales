const fetchFromSpreadsheet = async (id, get, cancelTokenSource) => {
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
	/*-- get values_sales --*/
	if (id) {
		const { data: { values: values_sales } } = await get(
			`${process.env.SALES_SHEET_URL}`,
			{ cancelToken: cancelTokenSource.token }
		)
		console.log(values_sales)
		if (!values_sales)
			await Promise.reject('Error at fetchFromSpreadsheet. values_sales is undefined')
		if (values_sales.length === 0)
			await Promise.reject('Error at fetchFromSpreadsheet. values_sales.length === 0')
		const sale = values_sales.filter( value => value[1] === id ).pop()
		const start_date = sale[2]
		const representative = sale[3]
		const reseller = sale[4]
		const category = sale[5]
		const type = sale[6]
		const end_date = sale[7]
		return { resellers, representatives, start_date, representative, reseller, category, type, end_date }
	}
	return { resellers, representatives }
}

export default fetchFromSpreadsheet