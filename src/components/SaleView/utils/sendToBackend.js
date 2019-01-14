import { post } from 'axios'

const sendToBackend = async (atendimento, status) => {
	const { data: { message } } = await post(`${process.env.EDIT_STATUS_URL}`, { atendimento, status })
	if (message === 'SUCCESS')
		console.log(message)
	else
		await Promise.reject(`Error submitting status. At sendToBackend: ${message}`)
}

export default sendToBackend