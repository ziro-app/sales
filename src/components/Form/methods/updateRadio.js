const updateRadio = that => input_value => {
	if (input_value) {
		that.setState({ transaction_type: input_value })
		that.changeUiState('INPUT')
	}
	else {
		that.setState({ transaction_type: '' })
		that.changeUiState('INPUT')
	}
}

export default updateRadio