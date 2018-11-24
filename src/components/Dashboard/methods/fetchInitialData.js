import { get, isCancel } from 'axios'
import fetchFromSpreadsheet from '../utils/fetchFromSpreadsheet'

const fetchInitialData = that => async () => {
	try {
		that.setState( await fetchFromSpreadsheet(get, that.cancelTokenSource) )
	} catch (error) {
		if (isCancel(error))
			console.log('Request canceled')
		else
			console.log(error)
	}
}

export default fetchInitialData