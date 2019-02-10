import dateToEnglish from './dateToEnglish'

const fetchFromSpreadsheet = async (id, get, cancelTokenSource) => {
	/*------------------------------ get values_resellers --------------------------------*/
	const { data: { values: values_resellers } } = await get(
		`${process.env.RESELLERS_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values_resellers)
		await Promise.reject('Error at fetchFromSpreadsheet. values_resellers is undefined')
	if (values_resellers.length === 0)
		await Promise.reject('Error at fetchFromSpreadsheet. values_resellers.length === 0')
	const resellers = values_resellers.map( value => value[0] ).slice(1).sort()
	/*------------------------------ get values_representatives --------------------------------*/
	const { data: { values: values_representatives } } = await get(
		`${process.env.REPRESENTATIVES_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values_representatives)
		await Promise.reject('Error at fetchFromSpreadsheet. values_representatives is undefined')
	if (values_representatives.length === 0)
		await Promise.reject('Error at fetchFromSpreadsheet. values_representatives.length === 0')
	const representatives = values_representatives.map( value => value[0] ).slice(1).sort()
	/*------------------------------ get values_shipping --------------------------------*/
	const { data: { values: values_shipping } } = await get(
		`${process.env.SHIPPING_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values_shipping)
		await Promise.reject('Error at fetchFromSpreadsheet. values_shipping is undefined')
	if (values_shipping.length === 0)
		await Promise.reject('Error at fetchFromSpreadsheet. values_shipping.length === 0')
	const shipping_options = values_shipping.map( value => value[0] ).slice(1).sort()
	/*------------------------------ get values_address --------------------------------*/
	const { data: { values: values_address } } = await get(
		`${process.env.ADDRESSES_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	if (!values_address)
		await Promise.reject('Error at fetchFromSpreadsheet. values_address is undefined')
	if (values_address.length === 0)
		await Promise.reject('Error at fetchFromSpreadsheet. values_address.length === 0')
	const addresses = values_address.map( value => value[0] ).slice(1).sort()
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
			start_date: dateToEnglish(start_date),
			representative,
			reseller,
			category,
			type,
			end_date: dateToEnglish(end_date),
			status
		}
	}
	return { resellers, representatives, shipping_options, addresses }
}

export default fetchFromSpreadsheet