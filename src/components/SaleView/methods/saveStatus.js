import sendToBackend from '../utils/sendToBackend'

const saveStatus = that => async ({ target: { value } }) => {
	if (that.state.saleIsComplete || value === 'Cancelado') {
		that.setState({ status: value, errorIsComplete: '' })
		try {
			that.changeUiState('SUBMIT')
			await sendToBackend(that.props.match.params.id, value)
			that.changeUiState('SUCCESS')
		} catch (error) {
			that.changeUiState('ERROR')
			console.log(error.response)
		}
	}
	else that.setState({ errorIsComplete: 'Campos em branco' })
}

export default saveStatus