import React from 'react'
import SaleCreate from '../../SaleCreate/index'

const renderSaleCreate = (props, forceReloadAfterEdit) =>
	<SaleCreate {...props} forceReloadAfterEdit={forceReloadAfterEdit} />

export default renderSaleCreate