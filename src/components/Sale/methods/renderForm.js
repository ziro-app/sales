import React from 'react'
import Header from '../../Header/index'
import Form from '../components/Form/index'
import Spinner from '../../Spinner/index'
import ErrorOnFetch from '../../ErrorOnFetch/index'

const renderForm = that => uiState => {
	/* define which component the UI will display based on the current state */
	const componentsToRender = {
		default:
			<Form
				state={that.state}
				updateDropdown={that.updateDropdown}
				updateDayPicker={that.updateDayPicker}
				updateRadio={that.updateRadio}
				submitForm={that.submitForm}
			/>,
		fetching:
			<Spinner size={'8rem'} />,
		error_fetching:
			<ErrorOnFetch />
	}
	/* make sure uiState does not fall out of the available options */
	const ui = uiState !== 'fetching' && uiState !== 'error_fetching' ? 'default' : uiState
	/* return component wrapped in Header */
	return <Header>{componentsToRender[ui]}</Header>
}

export default renderForm