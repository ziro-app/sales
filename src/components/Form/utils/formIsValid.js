import dateIsValid from './dateIsValid'

const formIsValid = ({
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
		const representative_is_valid = representatives.filter( name => name === representative).length
		const reseller_is_valid = resellers.filter( name => name === reseller).length
		const transaction_type_is_valid = ['Online', 'Offline'].filter( type => type === transaction_type).length
		const end_date_is_valid = dateIsValid(end_date)
		/* return true if all are valid */
		return start_date_is_valid
			&& representative_is_valid
			&& reseller_is_valid
			&& transaction_type_is_valid
			&& end_date_is_valid
	}
}

export default formIsValid