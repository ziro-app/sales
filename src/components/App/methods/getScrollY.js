const getScrollY = that => () => {
	that.setState({ scrollY: window.pageYOffset })
}

export default getScrollY