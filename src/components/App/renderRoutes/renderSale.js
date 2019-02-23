import React from 'react'
import Sale from '../../Sale/index'

const renderSale = (props, forceReloadAfterEdit) =>
	<Sale {...props} forceReloadAfterEdit={forceReloadAfterEdit} />

export default renderSale