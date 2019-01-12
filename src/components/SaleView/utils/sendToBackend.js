import { post } from 'axios'

const sendToBackend = async (status) => {
	const { data: { message } } = await post(`${process.env.BACKEND_URL}`, { status })
	if (message === 'SUCCESS')
		console.log(message)
	else
		await Promise.reject(`Error submitting status. At sendToBackend: ${message}`)
}

export default sendToBackend