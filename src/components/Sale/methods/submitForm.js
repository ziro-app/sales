import validateForm from '../utils/validateForm'
import generateErrorMessages from '../utils/generateErrorMessages'
import sendToBackend from '../utils/sendToBackend'

const submitForm = that => async () => {
	const sale = that.props.match.params.id
	const action = sale ? 'EDIT' : 'CREATE'
	const { formIsValid, ...fieldsAreValid } = validateForm(that.state)
	that.setState(generateErrorMessages(fieldsAreValid))
	that.changeUiState('INPUT')
	if (formIsValid) {
		try {
			that.changeUiState('SUBMIT')
			await sendToBackend(that.state, sale, action)
			that.changeUiState('SUCCESS')
			that.setState({
				start_date: '',
				representative: '',
				reseller: '',
				category: '',
				type: '',
				end_date: ''
			})
		} catch (error) {
			that.changeUiState('ERROR')
			console.log(error.response)
		}
	}
}

export default submitForm