/* import libraries */
import React from 'react'
import { Image } from 'cloudinary-react'
/* import utils */
import formatDate from '../../utils/formatDate'
import { dayPickerProps } from '../../utils/dayPickerProps'
/* import components */
import Dropdown from '@ziro/dropdown'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import InputForDayPicker from './InputForDayPicker/index'
import Radio from './Radio/index'
import Submit from './Submit/index'
import ErrorWrapper from  './ErrorWrapper/index'
/* import styles */
import { form, title } from './styles'

const FormBody = ({ state, updateDropdown, updateDayPicker, updateRadio, submitForm }) =>
	<div style={form}>
		<div>
		    <Image
		      cloudName='ziro'
		      width='45'
		      publicId='logo-round_kxn8sa'
		      version='1508000699'
		      format='png'
		      secure='true'
		    />
		</div>
		<h1 style={title}>Cadastrar atendimento</h1>
		<ErrorWrapper errorMessage={state.error_start_date}>
			<DayPickerInput
				component={InputForDayPicker}
				placeholder='Data início'
				value={state.start_date}
				onDayChange={updateDayPicker('start_date')}
				formatDate={formatDate}
				dayPickerProps={dayPickerProps}
			/>
		</ErrorWrapper>
		<ErrorWrapper errorMessage={state.error_representative}>
			<Dropdown
				name='representative'
				placeholder='Assessor'
				options={state.representatives}
				value={state.representative}
				updateParent={updateDropdown}
			/>
		</ErrorWrapper>
		<ErrorWrapper errorMessage={state.error_reseller}>
			<Dropdown
				name='reseller'
				placeholder='Lojista'
				options={state.resellers}
				value={state.reseller}
				updateParent={updateDropdown}
			/>
		</ErrorWrapper>
		<ErrorWrapper errorMessage={state.error_transaction_type}>	
			<Radio
				value={state.transaction_type}
				updateParent={updateRadio}
			/>
		</ErrorWrapper>
		<ErrorWrapper errorMessage={state.error_end_date}>
			<DayPickerInput
				component={InputForDayPicker}
				placeholder='Data fim'
				value={state.end_date}
				onDayChange={updateDayPicker('end_date')}
				formatDate={formatDate}
				dayPickerProps={dayPickerProps}
			/>
		</ErrorWrapper>
		<Submit
			submitForm={submitForm}
			uiState={state.uiState}
		/>
	</div>

export default FormBody