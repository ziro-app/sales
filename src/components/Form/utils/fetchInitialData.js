const fetchInitialData = async (get, cancelTokenSource) => {
	const { data: { values } } = await get(
		`${process.env.RESELLERS_SHEET_URL}`,
		{ cancelToken: cancelTokenSource.token }
	)
	const resellers = values.map( value => value[0] ).slice(1).sort()
	return { resellers }
}

export default fetchInitialData