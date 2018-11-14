import { post } from 'axios'

const sendToBackend = async ({ start_date, representative, reseller, transaction_type, end_date }) => {
	try {
		const result = await post(`${process.env.BACKEND_URL}`, {
			start_date,
			representative,
			reseller,
			transaction_type,
			end_date
		})
		console.log(result)
	} catch (error) {
		console.log(error)
	}
}

export default sendToBackend