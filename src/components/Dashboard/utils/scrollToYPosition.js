const scrollToYPosition = that => () => {
	if (!that.state.scrolled && that.state.uiState === 'fetched') {
		window.scroll(0, that.props.scrollY)
		that.setState({ scrolled: true })
	}
}

export default scrollToYPosition