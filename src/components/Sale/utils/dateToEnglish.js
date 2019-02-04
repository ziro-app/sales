const translateMonth = month => {
	switch (month) {
		case 'jan': return 'Jan'
		case 'fev': return 'Feb'
		case 'mar': return 'Mar'
		case 'abr': return 'Apr'
		case 'mai': return 'May'
		case 'jun': return 'Jun'
		case 'jul': return 'Jul'
		case 'ago': return 'Aug'
		case 'set': return 'Sep'
		case 'out': return 'Oct'
		case 'nov': return 'Nov'
		case 'dez': return 'Dec'
	}
}

const dateToEnglish = date =>
	new Date(`${date.substring(0,3)}${translateMonth(date.substring(3,6))}${date.substring(6)}`)

export default dateToEnglish