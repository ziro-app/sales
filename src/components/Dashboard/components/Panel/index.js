import React, { Fragment } from 'react'
import FilteredTable from './FilteredTable'
import AddNew from '../AddNew/index'

const Panel = ({ sales }) =>
	<Fragment>	
		<FilteredTable name='Abertos' sales={sales} />
		<FilteredTable name='Agendados' sales={sales} />
		<AddNew />
	</Fragment>

export default Panel