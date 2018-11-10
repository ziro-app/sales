import validateForm from '../utils/validateForm'
import sendToBackend from '../utils/sendToBackend'

const submitForm = that => async () => {
	const {
		formIsValid,
		...fieldsAreValid
	} = validateForm(that.state)
	console.log(formIsValid, fieldsAreValid)
	if (formIsValid) {
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