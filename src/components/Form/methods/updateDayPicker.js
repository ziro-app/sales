const updateDayPicker = that => input_name => input_date =>
	that.setState({ [input_name]: input_date.toDateString() })

export default updateDayPicker