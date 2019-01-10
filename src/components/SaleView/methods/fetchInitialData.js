import { get, isCancel } from 'axios'
import fetchFromSpreadsheet from '../utils/fetchFromSpreadsheet'

const fetchInitialData = that => async () => {
	try {
		const initialData = await fetchFromSpreadsheet(get, that.cancelTokenSource)
		that.setState(initialData)
		that.changeUiState('SUCCESS')
	} catch (error) {
		if (isCancel(error))
			console.log('Request canceled')
		else {
			that.changeUiState('ERROR')
			console.log(error.response)
		}
	}
}

export default fetchInitialData