const updateDayPicker = that => date =>
	that.setState({ start_date: date.toDateString() })

export default updateDayPicker