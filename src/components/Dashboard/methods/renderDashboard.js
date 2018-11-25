import React from 'react'
import Panel from '../components/Panel/index'

const renderDashboard = that => uiState => {
	/* define which component the UI will display based on the current state */
	const componentsToRender = {
		default:
			<Panel sales={that.state.sales} />,
		fetching:
			<div>Loading...</div>,
		error_fetching:
			<div>Erro</div>
	}
	/* make sure uiState does not fall out of the available options */
	const ui = uiState !== 'fetching' && uiState !== 'error_fetching' ? 'default' : uiState
	/* return component wrapped in header */
	return <div>{componentsToRender[ui]}</div>
}
export default renderDashboard