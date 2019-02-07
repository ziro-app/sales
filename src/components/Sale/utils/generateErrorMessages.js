const generateErrorMessages = ({
	start_date_is_valid,
	representative_is_valid,
	reseller_is_valid,
	category_is_valid,
	type_is_valid,
	end_date_is_valid,
	time_is_valid
}) => {
	const error_start_date = start_date_is_valid ? '' : 'Data inválida'
	const error_representative = representative_is_valid ? '' : 'Assessor inválido'
	const error_reseller = reseller_is_valid ? '' : 'Lojista inválido'
	const error_category = category_is_valid ? '' : 'Categoria inválida'
	const error_type = type_is_valid ? '' : 'Tipo inválido'
	const error_end_date = end_date_is_valid ? '' : 'Deve ser maior ou igual que data início'
	const error_time = time_is_valid ? '' : 'Deve ser entre 08:00 e 17:00'
	return {
		error_start_date,
		error_representative,
		error_reseller,
		error_category,
		error_type,
		error_end_date,
		error_time
	}
}

export default generateErrorMessages