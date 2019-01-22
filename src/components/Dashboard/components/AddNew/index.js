import React from 'react'
import { Link } from 'react-router-dom'
import AddNewSvg from './AddNewSvg'
import { button } from './styles'

const AddNew = ({ windowWidth }) =>
	<Link to='/cadastrar'>
		<div style={button(windowWidth)}>
			<AddNewSvg size={27} color={'rgb(48,62,77)'} />
		</div>
	</Link>

export default AddNew