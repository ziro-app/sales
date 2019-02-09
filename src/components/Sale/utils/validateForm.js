import { dateIsValid, optionIsValid, timeIsValid } from './validateFields'

const validateForm = ({
	start_date,
	representative,
	reseller,
	category,
	type,
	end_date,
	time,
	shipping,
	packaging,
	representatives,
	resellers,
	shipping_options,
	packaging_options
}) => {
	if (representatives && resellers && shipping_options && packaging_options) {
		/* check if each field contains valid values */
		const start_date_is_valid = dateIsValid(start_date)
		const representative_is_valid = optionIsValid(representatives, representative)
		const reseller_is_valid = optionIsValid(resellers, reseller)
		const category_is_valid = optionIsValid(['Venda','Troca'], category)
		const type_is_valid = optionIsValid(['Online','Offline'], type)
		const end_date_is_valid = new Date(end_date) >= new Date(start_date)
		const time_is_valid = timeIsValid(time)
		const shipping_is_valid = optionIsValid(shipping_options, shipping)
		const packaging_is_valid = optionIsValid(packaging_options, packaging)
		const formIsValid = start_date_is_valid
			&& representative_is_valid
			&& reseller_is_valid
			&& category_is_valid
			&& type_is_valid
			&& end_date_is_valid
			&& time_is_valid
			&& shipping_is_valid
			&& packaging_is_valid
		/* return the status of each field and if all are valid */
		return {
			formIsValid,
			start_date_is_valid,
			representative_is_valid,
			reseller_is_valid,
			category_is_valid,
			type_is_valid,
			end_date_is_valid,
			time_is_valid,
			shipping_is_valid,
			packaging_is_valid
		}
	}
}

export default validateForm