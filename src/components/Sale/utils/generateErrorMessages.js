const generateErrorMessages = (formIsComplete, {
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
}) => {
	const error_start_date = start_date_is_valid ? '' : 'Data inválida',
		error_representative = representative_is_valid ? '' : 'Assessor inválido',
		error_reseller = reseller_is_valid ? '' : 'Lojista inválido',
		error_category = category_is_valid ? '' : 'Categoria inválida',
		error_type = type_is_valid ? '' : 'Tipo inválido',
		error_end_date = end_date_is_valid ? '' : 'Deve ser maior ou igual que data início'
	let	error_time = '',
		error_shipping = '',
		error_address = '',
		error_packaging = '',
		error_invoice = ''
	if (formIsComplete) {
		error_time = time_is_valid ? '' : 'Deve ser entre 08:00 e 17:00'
		error_shipping = shipping_is_valid ? '' : 'Transporte inválido'
		error_address = address_is_valid ? '' : 'Endereço inválido'
		error_packaging = packaging_is_valid ? '' : 'Opção de fardo inválida'
		error_invoice = invoice_is_valid ? '' : 'Opção de nota inválida'
	}
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
		error_packaging,
		error_invoice
	}
}

export default generateErrorMessages