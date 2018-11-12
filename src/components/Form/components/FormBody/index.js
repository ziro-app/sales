/* import libraries */
import React from 'react'
/* import utils */
import formatDate from '../../utils/formatDate'
import { dayPickerProps } from '../../utils/dayPickerProps'
/* import components */
import Dropdown from '@ziro/dropdown'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import InputForDayPicker from './InputForDayPicker/index'
import Radio from './Radio/index'
import Submit from './Submit/index'
import ErrorMessage from  './ErrorMessage/index'
/* import styles */
import { body } from './styles'

const FormBody = ({ state, updateDropdown, updateDayPicker, updateRadio, submitForm }) =>
	<div style={body}>
		<ErrorMessage message={state.error_start_date}>
			<DayPickerInput
				component={InputForDayPicker}
				placeholder='Data início'
				value={state.start_date}
				onDayChange={updateDayPicker('start_date')}
				formatDate={formatDate}
				dayPickerProps={dayPickerProps}
			/>
		</ErrorMessage>
		<ErrorMessage message={state.error_representative}>
			<Dropdown
				name='representative'
				placeholder='Assessor'
				options={state.representatives}
				value={state.representative}
				updateParent={updateDropdown}
			/>
		</ErrorMessage>
		<ErrorMessage message={state.error_reseller}>
			<Dropdown
				name='reseller'
				placeholder='Lojista'
				options={state.resellers}
				value={state.reseller}
				updateParent={updateDropdown}
			/>
		</ErrorMessage>
		<ErrorMessage message={state.error_transaction_type}>	
			<Radio
				value={state.transaction_type}
				updateParent={updateRadio}
			/>
		</ErrorMessage>
		<ErrorMessage message={state.error_end_date}>
			<DayPickerInput
				component={InputForDayPicker}
				placeholder='Data fim'
				value={state.end_date}
				onDayChange={updateDayPicker('end_date')}
				formatDate={formatDate}
				dayPickerProps={dayPickerProps}
			/>
		</ErrorMessage>
		<Submit
			submitForm={submitForm}
			uiState={state.uiState}
		/>
	</div>

export default FormBody