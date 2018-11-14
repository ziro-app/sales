import { post } from 'axios'

const sendToBackend = async state => {
	try {
		const result = await post(
			'https://sales-backend.ziro.online/.netlify/functions/spreadsheet',
			state
		)
		console.log(result)
	} catch (error) {
		console.log(error)
	}
}

export default sendToBackend