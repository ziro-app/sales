import { get, isCancel } from 'axios'

const fetchInitialData = that => async () => {
	try {
		const result = await get(
			`${process.env.SALES_SHEET_URL}`,
			{ cancelToken: that.cancelTokenSource.token }
		)
		console.log(result)
	} catch (error) {
		if (isCancel(error))
			console.log('Request canceled')
		else
			console.log(error)
	}
}

export default fetchInitialData