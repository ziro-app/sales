import validateForm from '../utils/validateForm'
import generateErrorMessages from '../utils/generateErrorMessages'
import sendToBackend from '../utils/sendToBackend'

const submitForm = that => async () => {
	const sale = that.props.match.params.id
	const action = sale ? 'EDIT' : 'CREATE'
	const { formIsValid, formIsComplete, ...fieldsAreValid } = validateForm(that.state)
	that.setState(generateErrorMessages(formIsComplete, fieldsAreValid))
	that.changeUiState('INPUT')
	if (formIsValid) {
		try {
			that.changeUiState('SUBMIT')
			await sendToBackend(that.state, sale, action)
			that.changeUiState('SUCCESS')
			if (action === 'CREATE') {
				that.setState({
					start_date: '',
					representative: '',
					reseller: '',
					category: '',
					type: '',
					end_date: '',
					time: '',
					shipping: '',
					address: '',
					packaging: '',
					invoice: '',
					comments: ''
				})
			}
			if (action === 'EDIT')
				that.props.forceReloadAfterEdit()
		} catch (error) {
			console.log(error)
			that.changeUiState('ERROR')
			if (error.response)
				console.log(error.response)
		}
	}
}

export default submitForm