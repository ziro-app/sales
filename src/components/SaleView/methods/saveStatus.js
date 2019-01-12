import sendToBackend from '../utils/sendToBackend'

const saveStatus = that => async ({ target: { value } }) => {
	that.setState({ status: value })
	try {
		that.changeUiState('SUBMIT')
		await sendToBackend(value)
		that.changeUiState('SUCCESS')
	} catch (error) {
		that.changeUiState('ERROR')
		console.log(error.response)
	}
}

export default saveStatus