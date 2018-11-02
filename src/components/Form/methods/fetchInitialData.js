import { get, isCancel } from 'axios'
import fetchFromSpreadsheet from '../utils/fetchFromSpreadsheet'

const fetchInitialData = that => async () => {
	try {
		that.changeUiState('FETCH')
		that.setState( await fetchFromSpreadsheet(get, that.cancelTokenSource) )
		that.changeUiState('SUCCESS')
	} catch (error) {
		if (isCancel(error))
			console.log('Request canceled')
		else {
			that.changeUiState('ERROR')
			console.log(error)
		}
	}
}

export default fetchInitialData