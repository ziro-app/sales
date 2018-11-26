import React from 'react'
import { Link } from 'react-router-dom'
import AddNewSvg from './AddNewSvg'
import { button } from './styles'

const AddNew = () =>
	<Link to='/'>
		<div style={button}>
			<AddNewSvg size={27} color={'rgba(48,62,77,1)'} />
		</div>
	</Link>

export default AddNew