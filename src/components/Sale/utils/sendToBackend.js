import { post } from 'axios'

const sendToBackend = async ({ start_date, representative, reseller, category, type, end_date }) => {
	const { data: { message } } = await post(`${process.env.CREATE_URL}`, {
		start_date,
		representative,
		reseller,
		category,
		type,
		end_date
	})
	if (message === 'SUCCESS')
		console.log(message)
	else
		await Promise.reject(`Error submitting form. At sendToBackend: ${message}`)
}

export default sendToBackend