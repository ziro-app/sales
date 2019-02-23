import { getOptions, getOptionsNoSort, getOptionsAddress } from './getOptions'
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
	const resellers = getOptions(values,0)
	const representatives = getOptions(values,1)
	const shipping_options = getOptions(values,2)
	const addresses = getOptionsAddress(values,3)
	const invoice_options = getOptionsNoSort(values,5)
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
		const [ , , start_date, representative, reseller, category, type, end_date, time,
			shipping, address, packaging, invoice, comments, status, pickup_code ] = sale
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
			time,
			shipping,
			address,
			packaging,
			invoice,
			comments,
			status,
			pickup_code
		}
	}
	return { resellers, representatives, shipping_options, addresses, invoice_options }
}

export default fetchFromSpreadsheet