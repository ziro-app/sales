const updateRadio = that => input_value => {
	if (input_value)
		that.setState({ transaction_type: input_value })
	else
		that.setState({ transaction_type: '' })
}

export default updateRadio