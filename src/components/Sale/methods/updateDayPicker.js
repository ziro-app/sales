const updateDayPicker = that => input_name => input_date => {
	if (input_date) {
		that.setState({ [input_name]: input_date })
		that.changeUiState('INPUT')
	}
	else {
		that.setState({ [input_name]: '' })
		that.changeUiState('INPUT')
	}
}

export default updateDayPicker