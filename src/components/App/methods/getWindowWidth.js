const getWindowWidth = that => () => {
	that.setState({ windowWidth: window.innerWidth })
}

export default getWindowWidth