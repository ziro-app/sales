import React from 'react'
import Header from '../../Header/index'
import View from '../components/View/index'
import Spinner from '../../Spinner/index'
import ErrorOnFetch from '../../ErrorOnFetch/index'

const renderSaleView = that =>
	({ uiState, status, saleIsComplete, errorIsComplete }, saveStatus, updateIsComplete) => {
		const path = that.props.match.path
		const id = that.props.match.params.id
		/* define which component the UI will display based on the current state */
		const componentsToRender = {
			default:
				<View
					uiState={uiState}
					id={id}
					sales={that.props.sales.length === 0 ? that.state.sales : that.props.sales}
					statuses={that.props.statuses.length === 0 ? that.state.statuses : that.props.statuses}
					logistics={that.props.logistics.length === 0 ? that.state.logistics : that.props.logistics}
					userStatus={status}
					updateParentAndSheet={saveStatus}
					forceReloadAfterEdit={that.props.forceReloadAfterEdit}
					saleIsComplete={saleIsComplete}
					errorIsComplete={errorIsComplete}
					updateIsComplete={updateIsComplete}
				/>,
			fetching:
				<Spinner size={'8rem'} />,
			error_fetching:
				<ErrorOnFetch />
		}
		/* make sure uiState does not fall out of the available options */
		const ui = uiState !== 'fetching' && uiState !== 'error_fetching' ? 'default' : uiState
		/* return component wrapped in Header */
		return (
			<Header title={`Atendimento ${id}`} path={path} backRoute={'/'}>
				{componentsToRender[ui]}
			</Header>
		)
}

export default renderSaleView