import { get } from 'axios'

const fetchInitialData = that => async () => {
	const result = await get(`${process.env.SALES_SHEET_URL}`)
	console.log(result)
}

export default fetchInitialData