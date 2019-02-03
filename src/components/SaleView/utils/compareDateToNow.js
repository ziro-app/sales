const monthToEnglish = (month) => {
	switch (month) {
		case 'jan': return 'jan'
		case 'fev': return 'feb'
		case 'mar': return 'mar'
		case 'abr': return 'apr'
		case 'mai': return 'may'
		case 'jun': return 'jun'
		case 'jul': return 'jul'
		case 'ago': return 'aug'
		case 'set': return 'sep'
		case 'out': return 'oct'
		case 'nov': return 'nov'
		case 'dez': return 'dec'
	}
}

const dateIsGreaterThanToday = (date) =>
	new Date(new Date(date).setFullYear(new Date().getFullYear())) > new Date(new Date().toDateString())

const compareDateToNow = (date) => {
	const dateInEnglish = `${date.substring(0,3)}${monthToEnglish(date.substring(3))}`
	return dateIsGreaterThanToday(dateInEnglish)
}

export default compareDateToNow