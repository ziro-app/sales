import React from 'react'
import Header from '../../Header/index'
import Panel from '../components/Panel/index'
import Spinner from '../../Spinner/index'
import ErrorOnFetch from '../../ErrorOnFetch/index'

const renderDashboard = that => uiState => {
	/* define which component the UI will display based on the current state */
	const componentsToRender = {
		default:
			<Panel sales={that.state.sales} />,
		fetching:
			<Spinner size={'8rem'} />,
		error_fetching:
			<ErrorOnFetch />
	}
	/* make sure uiState does not fall out of the available options */
	const ui = uiState !== 'fetching' && uiState !== 'error_fetching' ? 'default' : uiState
	/* return component wrapped in header */
	return (
		<Header title='Atendimentos' path={that.props.location.pathname}>
			{componentsToRender[ui]}
		</Header>
	)
}

export default renderDashboard