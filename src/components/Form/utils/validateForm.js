import { dateIsValid, optionIsValid } from './validateFields'

const validateForm = ({
	start_date,
	representative,
	reseller,
	transaction_type,
	end_date,
	representatives,
	resellers
}) => {
	if (representatives && resellers) {
		/* check if each field contains valid values */
		const start_date_is_valid = dateIsValid(start_date)
		const representative_is_valid = optionIsValid(representatives, representative)
		const reseller_is_valid = optionIsValid(resellers, reseller)
		const transaction_type_is_valid = optionIsValid(['Online','Offline'], transaction_type)
		const end_date_is_valid = dateIsValid(end_date)		
		const formIsValid = start_date_is_valid
			&& representative_is_valid
			&& reseller_is_valid
			&& transaction_type_is_valid
			&& end_date_is_valid
		/* return the status of each field and if all are valid */
		return {
			formIsValid,
			start_date_is_valid,
			representative_is_valid,
			reseller_is_valid,
			transaction_type_is_valid,
			end_date_is_valid
		}
	}
}

export default validateForm