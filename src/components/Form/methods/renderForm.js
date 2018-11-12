import React from 'react'
import FormHeader from '../components/FormHeader/index'
import FormBody from '../components/FormBody/index'
import Spinner from '../components/Spinner/index'
import ErrorOnLoad from '../components/ErrorOnLoad/index'

const renderForm = that => uiState => {
	const componentsToRender = {
		idle: <FormBody
			state={that.state}
			updateDropdown={that.updateDropdown}
			updateDayPicker={that.updateDayPicker}
			updateRadio={that.updateRadio}
			submitForm={that.submitForm}
		/>,
		fetching: <Spinner size={'8rem'} />,
		error: <ErrorOnLoad />
	}
	return <FormHeader>{componentsToRender[uiState]}</FormHeader>
} 
	

export default renderForm