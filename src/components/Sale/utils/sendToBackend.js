import { post } from 'axios'

const sendToBackend = async ({ 
		start_date,
		representative,
		reseller,
		category,
		type,
		end_date,
		time,
		shipping,
		address,
		packaging,
		invoice,
		comments
	}, sale, action) => {
	const url = action === 'CREATE' ? '/create-row' : '/edit-row'
	const { data: message } = await post(`${process.env.API_URL}${url}`, {
		sale,
		start_date,
		representative,
		reseller,
		category,
		type,
		end_date,
		time,
		shipping,
		address,
		packaging,
		invoice,
		comments
	})
	if (message !== 'Success')
		await Promise.reject(`Error submitting form. At sendToBackend: ${message}`)
}

export default sendToBackend