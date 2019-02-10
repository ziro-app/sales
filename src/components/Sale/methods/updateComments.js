const updateComments = that => value => {
	that.setState({ comments: value })
	that.changeUiState('INPUT')
}

export default updateComments