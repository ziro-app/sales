const updateTime = that => value => {
	if (value.match(/^[0-9:]+$/g) || value === '') {
		that.setState({ time: value })
		that.changeUiState('INPUT')
	}
}

export default updateTime