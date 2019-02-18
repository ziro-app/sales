import { dateIsValid, optionIsValid, timeIsValid } from './validateFields'
import getResellerAddress from './getResellerAddress'

const validateForm = ({
	start_date,
	representative,
	reseller,
	category,
	type,
	end_date,
	time,
	shipping,
	address,
	packaging,
	invoice,
	pickup_code,
	representatives,
	resellers,
	shipping_options,
	addresses,
	packaging_options,
	invoice_options
}) => {
	if (representatives && resellers && shipping_options && addresses && packaging_options && invoice_options) {
		/* check if each field contains valid values */
		const start_date_is_valid = dateIsValid(start_date),
			representative_is_valid = optionIsValid(representatives, representative),
			reseller_is_valid = optionIsValid(resellers, reseller),
			category_is_valid = optionIsValid(['Venda','Troca'], category),
			type_is_valid = optionIsValid(['Online','Offline'], type),
			end_date_is_valid = new Date(end_date) >= new Date(start_date),
			time_is_valid = timeIsValid(time),
			shipping_is_valid = optionIsValid(shipping_options, shipping),
			address_is_valid = optionIsValid(getResellerAddress(addresses, reseller), address),
			packaging_is_valid = optionIsValid(packaging_options, packaging),
			invoice_is_valid = optionIsValid(invoice_options, invoice)
		/* supplementary fields are valid only if any has been filled */
		let formIsComplete,
			formIsValid
		if (time || shipping || address || packaging || invoice || pickup_code) {
			formIsComplete = true
			formIsValid = start_date_is_valid
				&& representative_is_valid
				&& reseller_is_valid
				&& category_is_valid
				&& type_is_valid
				&& end_date_is_valid
				&& time_is_valid
				&& shipping_is_valid
				&& address_is_valid
				&& packaging_is_valid
				&& invoice_is_valid
			return {
				formIsComplete,
				formIsValid,
				start_date_is_valid,
				representative_is_valid,
				reseller_is_valid,
				category_is_valid,
				type_is_valid,
				end_date_is_valid,
				time_is_valid,
				shipping_is_valid,
				address_is_valid,
				packaging_is_valid,
				invoice_is_valid
			}
		}
		formIsComplete = false
		formIsValid = start_date_is_valid
			&& representative_is_valid
			&& reseller_is_valid
			&& category_is_valid
			&& type_is_valid
			&& end_date_is_valid
		return {
			formIsComplete,
			formIsValid,
			start_date_is_valid,
			representative_is_valid,
			reseller_is_valid,
			category_is_valid,
			type_is_valid,
			end_date_is_valid
		}
	}
}

export default validateForm