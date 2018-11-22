const updateRadio = that => (input_name, input_value) => {
	if (input_value) {
		that.setState({ [input_name]: input_value })
		that.changeUiState('INPUT')
	}
	else {
		that.setState({ [input_name]: '' })
		that.changeUiState('INPUT')
	}
}

export default updateRadio