const updateDayPicker = that => input_name => input_date => {
	if (input_date)
		that.setState({ [input_name]: input_date })
	else
		that.setState({ [input_name]: '' })
}

export default updateDayPicker