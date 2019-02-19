import { post } from 'axios'

const sendToBackend = async (atendimento, status, saleIsComplete) => {
	const { data: message } = await post(`${process.env.EDIT_STATUS_URL}`, { atendimento, status, saleIsComplete })
	if (message !== 'Success')
		await Promise.reject(`Error submitting status. At sendToBackend: ${message}`)
}

export default sendToBackend