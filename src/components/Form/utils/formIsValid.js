import dateIsValid from './dateIsValid'

const formIsValid = ({ start_date, representative, reseller, transaction_type, end_date }) => {
	
	const start_date_is_valid = dateIsValid(start_date)
	const end_date_is_valid = dateIsValid(end_date)
	
	return start_date_is_valid && end_date_is_valid
}

export default formIsValid