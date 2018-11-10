import formIsValid from '../utils/formIsValid'
import sendToBackend from '../utils/sendToBackend'

const submitForm = that => async () => {
	if (formIsValid(that.state)) {
		try {
			that.changeUiState('SUBMIT')
			await sendToBackend(that.state)
			that.changeUiState('SUCCESS')
		} catch (error) {
			that.changeUiState('ERROR')
			console.log(error)
		}
	}
}

export default submitForm