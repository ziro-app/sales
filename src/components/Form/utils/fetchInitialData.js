import { get } from 'axios'

const fetchInitialData = async () => {
	const resellerSheet = await get(`${process.env.RESELLERS_SHEET_URL}`)
	const resellers = resellerSheet.data.values.map( (resellerInfo) => resellerInfo[0] ).slice(1).sort()
	return { resellers }
}

export default fetchInitialData