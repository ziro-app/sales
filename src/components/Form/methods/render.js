/* import libraries */
import React from 'react'
import { Image } from 'cloudinary-react'
/* import utils */
import formatDate from '../utils/formatDate'
import { dayPickerProps } from '../utils/dayPickerProps'
/* import components */
import Dropdown from '@ziro/dropdown'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import InputForDayPicker from '../components/InputForDayPicker'
import Radio from '../components/Radio/index'
import Submit from '../components/Submit/index'
/* import styles */
import { form, logo, title } from '../styles'

const render = (state, updateDropdown, updateDayPicker, updateRadio, submitForm) =>
	<div style={form}>
		<div style={logo}>
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
		<DayPickerInput
			component={InputForDayPicker}
			placeholder='Data início'
			value={state.start_date}
			onDayChange={updateDayPicker('start_date')}
			formatDate={formatDate}
			dayPickerProps={dayPickerProps}
		/>
		<Dropdown
			name='representative'
			placeholder='Assessor'
			options={state.representatives}
			value={state.representative}
			updateParent={updateDropdown}
		/>
		<Dropdown
			name='reseller'
			placeholder='Lojista'
			options={state.resellers}
			value={state.reseller}
			updateParent={updateDropdown}
		/>
		<Radio
			value={state.transaction_type}
			updateParent={updateRadio}
		/>
		<DayPickerInput
			component={InputForDayPicker}
			placeholder='Data fim'
			value={state.end_date}
			onDayChange={updateDayPicker('end_date')}
			formatDate={formatDate}
			dayPickerProps={dayPickerProps}
		/>
		<Submit submitForm={submitForm} />
	</div>

export default render