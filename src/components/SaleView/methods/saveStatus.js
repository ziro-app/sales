import sendToBackend from '../utils/sendToBackend'

const saveStatus = that => async ({ target: { value } }) => {
	if (that.state.saleIsComplete || value === 'Cancelado') {
		try {
			that.changeUiState('SUBMIT')
			await sendToBackend(that.props.match.params.id, value)
			that.changeUiState('SUCCESS')
			that.setState({ status: value, errorIsComplete: '' })
		} catch (error) {
			console.log(error)
			that.changeUiState('ERROR')
			if (error.response)
				console.log(error.response)
		}
	}
	else that.setState({ errorIsComplete: 'Campos em branco' })
}

export default saveStatus