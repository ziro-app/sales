const updateTime = that => value => {
	console.log(value)
	if (value) {
		that.setState({ time: value })
		that.changeUiState('INPUT')
	}
	else {
		that.setState({ time: '' })
		that.changeUiState('INPUT')
	}
}

export default updateTime