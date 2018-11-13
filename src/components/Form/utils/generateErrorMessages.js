const generateErrorMessages = ({
	start_date_is_valid,
	representative_is_valid,
	reseller_is_valid,
	transaction_type_is_valid,
	end_date_is_valid
}) => {
	const error_start_date = start_date_is_valid ? '' : 'Data inválida'
	const error_representative = representative_is_valid ? '' : 'Assessor inválido'
	const error_reseller = reseller_is_valid ? '' : 'Lojista inválido'
	const error_transaction_type = transaction_type_is_valid ? '' : 'Tipo inválido'
	const error_end_date = end_date_is_valid ? '' : 'Deve ser maior ou igual que data início'
	return {
		error_start_date,
		error_representative,
		error_reseller,
		error_transaction_type,
		error_end_date
	}
}

export default generateErrorMessages