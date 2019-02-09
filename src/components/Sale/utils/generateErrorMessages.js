const generateErrorMessages = ({
	start_date_is_valid,
	representative_is_valid,
	reseller_is_valid,
	category_is_valid,
	type_is_valid,
	end_date_is_valid,
	time_is_valid,
	shipping_is_valid,
	address_is_valid,
	packaging_is_valid
}) => {
	const error_start_date = start_date_is_valid ? '' : 'Data inválida'
	const error_representative = representative_is_valid ? '' : 'Assessor inválido'
	const error_reseller = reseller_is_valid ? '' : 'Lojista inválido'
	const error_category = category_is_valid ? '' : 'Categoria inválida'
	const error_type = type_is_valid ? '' : 'Tipo inválido'
	const error_end_date = end_date_is_valid ? '' : 'Deve ser maior ou igual que data início'
	const error_time = time_is_valid ? '' : 'Deve ser entre 08:00 e 17:00'
	const error_shipping = shipping_is_valid ? '' : 'Transporte inválido'
	const error_address = address_is_valid ? '' : 'Endereço inválido'
	const error_packaging = packaging_is_valid ? '' : 'Opção de fardo inválida'
	return {
		error_start_date,
		error_representative,
		error_reseller,
		error_category,
		error_type,
		error_end_date,
		error_time,
		error_shipping,
		error_address,
		error_packaging
	}
}

export default generateErrorMessages