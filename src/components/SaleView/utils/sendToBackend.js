import { post } from 'axios'

const sendToBackend = async (atendimento, status, saleIsComplete) => {
	const { data: message } = await post(`${process.env.API_URL}/edit-status`, { atendimento, status, saleIsComplete })
	if (message !== 'Success')
		await Promise.reject(`Error submitting status. At sendToBackend: ${message}`)
}

export default sendToBackend