import React from 'react'
import FormHeader from '../components/FormHeader/index'
import FormBody from '../components/FormBody/index'
import Spinner from '../components/Spinner/index'
import ErrorOnLoad from '../components/ErrorOnLoad/index'

const renderForm = that => uiState => {
	/* define which component the UI will display based on the current state */
	const componentsToRender = {
		default:
			<FormBody
				state={that.state}
				updateDropdown={that.updateDropdown}
				updateDayPicker={that.updateDayPicker}
				updateRadio={that.updateRadio}
				submitForm={that.submitForm}
			/>,
		fetching:
			<Spinner size={'8rem'} />,
		error_fetching:
			<ErrorOnLoad />
	}
	/* make sure uiState does not fall out of the available options */
	const ui = uiState !== 'fetching' && uiState !== 'error_fetching' ? 'default' : uiState
	/* return component wrapped in FormHeader */
	return <FormHeader>{componentsToRender[ui]}</FormHeader>
}

export default renderForm