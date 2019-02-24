import { getOptions, getOptionsNoSort, getOptionsAddress, getSales } from './getOptions'
import dateToEnglish from './dateToEnglish'

const fetchFromSpreadsheet = async (id, get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.DATA_SHEET_URL}`,
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
		const [ sale ] = getSales(values).filter( value => value[0] === id )
		const [ , start_date, representative, reseller, category, type, end_date, time,
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