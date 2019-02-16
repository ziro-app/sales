import { post } from 'axios'

const sendToBackend = async (dataToSend, sale, action) => {
	const url = action === 'CREATE' ? process.env.CREATE_ROW_URL : process.env.EDIT_ROW_URL
	const { data: message } = await post(`${url}`, dataToSend)
	if (message !== 'Success')
		await Promise.reject(`Error submitting form. At sendToBackend: ${message}`)
}

export default sendToBackend