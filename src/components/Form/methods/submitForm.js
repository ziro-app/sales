import validateForm from '../utils/validateForm'
import generateErrorMessages from '../utils/generateErrorMessages'
import sendToBackend from '../utils/sendToBackend'

const submitForm = that => async () => {
	const { formIsValid, ...fieldsAreValid } = validateForm(that.state)
	console.log(formIsValid, fieldsAreValid)
	that.setState(generateErrorMessages(fieldsAreValid))
	if (formIsValid) {
		try {
			that.changeUiState('SUBMIT')
			await sendToBackend(that.state)
			that.changeUiState('SUCCESS')
			// that.setState({
			// 	start_date: '',
			// 	representative: '',
			// 	reseller: '',
			// 	transaction_type: '',
			// 	end_date: ''
			// })
		} catch (error) {
			that.changeUiState('ERROR')
			console.log(error)
		}
	}
}

export default submitForm