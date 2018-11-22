import { dateIsValid, optionIsValid } from './validateFields'

const validateForm = ({
	start_date,
	representative,
	reseller,
	category,
	type,
	end_date,
	representatives,
	resellers
}) => {
	if (representatives && resellers) {
		/* check if each field contains valid values */
		const start_date_is_valid = dateIsValid(start_date)
		const representative_is_valid = optionIsValid(representatives, representative)
		const reseller_is_valid = optionIsValid(resellers, reseller)
		const category_is_valid = optionIsValid(['Venda','Troca'], category)
		const type_is_valid = optionIsValid(['Online','Offline'], type)
		const end_date_is_valid = new Date(end_date) >= new Date(start_date)
		const formIsValid = start_date_is_valid
			&& representative_is_valid
			&& reseller_is_valid
			&& category_is_valid
			&& type_is_valid
			&& end_date_is_valid
		/* return the status of each field and if all are valid */
		return {
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