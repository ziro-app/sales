const updateDayPicker = that => input_name => input_date => {
	if (input_date)
		that.setState({ [input_name]: new Date(new Date(input_date).setHours(0,0,0)) })
	else
		that.setState({ [input_name]: '' })
	that.changeUiState('INPUT')
}

export default updateDayPicker