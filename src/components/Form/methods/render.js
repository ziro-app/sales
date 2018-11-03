/* import libraries */
import React from 'react'
/* import utils */
import formatDate from '../utils/formatDate'
import { dayPickerProps } from '../utils/dayPickerProps'
/* import components */
import Dropdown from '@ziro/dropdown'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import ErrorBoundary from '../../ErrorBoundary/index'
/* import styles */
import { form, title } from '../styles.js'

const render = (state, updateDropdown, updateDayPicker) =>
	<ErrorBoundary>
		<div style={form}>
			<h1 style={title}>Cadastrar atendimento</h1>
			<Dropdown
				name='reseller'
				placeholder='Lojista'
				options={state.resellers}
				updateParent={updateDropdown}
			/>
			<Dropdown
				name='representative'
				placeholder='Assessor'
				options={state.representatives}
				updateParent={updateDropdown}
			/>
			<DayPickerInput
				onDayChange={updateDayPicker}
				formatDate={formatDate}
				dayPickerProps={dayPickerProps}
			/>
		</div>
	</ErrorBoundary>

export default render