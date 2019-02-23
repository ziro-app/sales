import React from 'react'
import Dashboard from '../../Dashboard/index'

const renderDashboard = (props, { windowWidth, scrollY }, getScrollY, updateParent) =>
	<Dashboard
		{...props}
		windowWidth={windowWidth}
		scrollY={scrollY}
		getScrollY={getScrollY}
		updateParent={updateParent}
	/>

export default renderDashboard