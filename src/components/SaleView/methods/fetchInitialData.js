import { get, isCancel } from 'axios'
import fetchFromSpreadsheet from '../utils/fetchFromSpreadsheet'

const fetchInitialData = that => async () => {
	try {
		const initialData = await fetchFromSpreadsheet(get, that.cancelTokenSource)
		that.setState(initialData)
		// that.props.updateParent(initialData)
		// that.changeUiState('SUCCESS')
	} catch (error) {
		console.log(error.response)
		// if (isCancel(error))
		// 	console.log('Request canceled')
		// else {
		// 	that.changeUiState('ERROR')
		// 	console.log(error)
		// }
	}
}

export default fetchInitialData