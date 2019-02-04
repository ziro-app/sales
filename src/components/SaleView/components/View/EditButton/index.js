import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { link, edit } from './styles'

const EditButton = ({ status, id }) => {
	return (
		<Fragment>
			{status === 'Em trânsito'
				?
					null
				:
					<Link style={link} to={`/atendimentos/${id}/editar`}>
						<input style={edit} type='submit' value='Editar' />
					</Link>
			}
		</Fragment>
	)
}

EditButton.propTypes = {
	status: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
}

export default EditButton