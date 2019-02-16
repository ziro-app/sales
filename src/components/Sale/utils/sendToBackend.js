import { post } from 'axios'

const sendToBackend = async ({ start_date, representative, reseller, category, type, end_date }, sale, action) => {
	const url = action === 'CREATE' ? process.env.CREATE_ROW_URL : process.env.EDIT_ROW_URL
	const { data: message } = await post(`${url}`, {
		sale,
		start_date,
		representative,
		reseller,
		category,
		type,
		end_date
	})
	if (message !== 'Success')
		Promise.reject(`Error submitting form. At sendToBackend: ${message}`)
}

export default sendToBackend