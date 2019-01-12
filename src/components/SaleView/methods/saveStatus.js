const saveStatus = that => ({ target: { value } }) => {
	that.setState({ status: value })
	that.changeUiState('INPUT')
}

export default saveStatus