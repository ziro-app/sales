import React from 'react'
import Dropdown from '@ziro/dropdown'

const FilterAssessores = ({arrayAssessores, filterAssessores, updateDropdown}) => {
    return (
        <Dropdown
				name='filterAssessores'
				placeholder='Assessor'
				options={arrayAssessores}
				value={filterAssessores}
				updateParent={updateDropdown}
			/>
    )
}

export default FilterAssessores