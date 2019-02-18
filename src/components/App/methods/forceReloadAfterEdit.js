const forceReloadAfterEdit = that => (time, updateEventIsCreated) => {
	/* delete sales array from parent to force fetch when navigating back */
	that.setState({ sales: [] })
	/* if submitted with the time field, means event was created. Prevent submitting blank flieds */
	if (time)
		updateEventIsCreated()
}

export default forceReloadAfterEdit