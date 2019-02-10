import dateToEnglish from './dateToEnglish'

const fetchFromSpreadsheet = async (id, get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.OPTIONS_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values)
		await Promise.reject('Error at fetchFromSpreadsheet. values is undefined')
	if (values.length === 0)
		await Promise.reject('Error at fetchFromSpreadsheet. values.length === 0')
	const resellers = values.map(value => value[0]).slice(1).sort().filter(value => Boolean(value[0]))
	const representatives = values.map(value => value[1]).slice(1).sort().filter(value => Boolean(value[0]))
	const shipping_options = values.map(value => value[2]).slice(1).sort().filter(value => Boolean(value[0]))

	const part_one = values.filter( value => value[3] === 'FAVORITOS').map( value => value[4])
	const part_two = values.filter( value => value[3] !== 'FAVORITOS' && value[3]).map( value => ({
		[value[3]]: value[4]
	})).slice(1)
	const addresses = [ ...part_two, { FAVORITOS: part_one } ]
	const invoice_options = values.map(value => value[5]).slice(1).sort().filter(value => Boolean(value[0]))

	/*------------------------------ get values_sales --------------------------------*/
	if (id) {
		const { data: { values: values_sales } } = await get(
			`${process.env.SALES_SHEET_URL}`,
			{ cancelToken: cancelTokenSource.token }
		)
		if (!values_sales)
			await Promise.reject('Error at fetchFromSpreadsheet. values_sales is undefined')
		if (values_sales.length === 0)
			await Promise.reject('Error at fetchFromSpreadsheet. values_sales.length === 0')
		const [ sale ] = values_sales.filter( value => value[1] === id )
		const [ , , start_date, representative, reseller, category, type, end_date, , , , , , status ] = sale
		return {
			resellers,
			representatives,
			shipping_options,
			addresses,
			invoice_options,
			start_date: dateToEnglish(start_date),
			representative,
			reseller,
			category,
			type,
			end_date: dateToEnglish(end_date),
			status
		}
	}
	return { resellers, representatives, shipping_options, addresses, invoice_options }
}

export default fetchFromSpreadsheet